import React, { useState } from 'react';
import Item from './Item';
import { ItemsProps } from '../interfaces/items';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Items = ({ items, pagination }: ItemsProps) => {
  const [page, setPage] = useState(pagination.currentPage);
  const pageForward = () => {
    if (page < pagination.totalPages) {
      setPage(page + 1);
    }
  };

  const pageBackward = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="bg-white p-4">
      <div>
        {items.length > 0 ? (
          items.map((item, i) => <Item key={i} item={item} />)
        ) : (
          <p className="text-2xl font-bold text-gray-300">
            No books available yet
          </p>
        )}
      </div>
      <div>
        <div className="flex list-none justify-center items-center mt-5">
          <button
            onClick={() => pageBackward()}
            disabled={page === 1}
            className="bg-indigo-50 border-indigo-500 text-indigo-600 p-2 border"
          >
            <ChevronLeft />
          </button>
          {[...Array(pagination.totalPages)].map((_, i) => (
            <React.Fragment key={i + 1}>
              {i + 1 <= 2 && i + 1 !== page && (
                <button className="bg-indigo-50 text-indigo-600 py-2 px-4 border">
                  {i + 1}
                </button>
              )}
              {i + 1 === page && (
                <button className="bg-indigo-50 border-indigo-500 text-indigo-600 py-2 px-4 border">
                  {page}
                </button>
              )}
              {i + 1 >= pagination.totalPages - 1 && i + 1 !== page && (
                <button className="bg-indigo-50 text-indigo-600 py-2 px-4 border">
                  {i + 1}
                </button>
              )}
            </React.Fragment>
          ))}
          <button
            onClick={() => pageForward()}
            disabled={page === pagination.totalPages}
            className="bg-indigo-50 border-indigo-500 text-indigo-600 p-2 border"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
