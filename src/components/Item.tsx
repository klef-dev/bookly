import React from 'react';
import Ratings from './Ratings';
import { ItemProps } from '../interfaces/items';

const Item = ({ item }: ItemProps) => {
  return (
    <div className=" border-b border-b-gray-300 mb-4 py-4">
      <div className="flex">
        <img
          src={item.volumeInfo.imageLinks?.thumbnail}
          alt=""
          className="h-20"
        />
        <div>
          <p>{item.volumeInfo.authors}</p>
          <p className=" text-gray-500 text-sm">{item.volumeInfo.categories}</p>
        </div>
      </div>
      <div>
        <p className=" font-bold text-2xl">{item.volumeInfo.title}</p>
        <Ratings averageRating={item?.volumeInfo?.averageRating} />
        <div className=" text-gray-500 text-sm">
          <p>
            # {item.volumeInfo.pageCount} <b>.</b>{' '}
            {item.volumeInfo.publishedDate} <b>.</b> {item.volumeInfo.publisher}
          </p>
          <p>{item.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
