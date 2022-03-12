import React, { useState } from 'react';
import Item from './Item';
import { ItemsProps } from '../interfaces/items';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Items = ({ items, pagination }: ItemsProps) => {
  const [page, setPage] = useState(1);
  const pageForward = () => {
    setPage(pagination.pageNum + 1);
  };

  const pageBackward = () => {
    setPage(pagination.pageNum - 1);
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
            disabled={!pagination.prev}
            className="bg-indigo-50 border-indigo-500 text-indigo-600 p-2 border"
          >
            <ChevronLeft />
          </button>
          <div className="bg-indigo-50 border-indigo-500 text-indigo-600 py-2 px-4 border">
            {pagination.pageNum}
          </div>
          <button
            onClick={() => pageForward()}
            disabled={!pagination.next}
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
