import React from 'react';
import Ratings from './Ratings';
import stock from '../utils/stock.jpg';
import { ItemProps } from '../interfaces/items';

const Item = ({ item }: ItemProps) => {
  return (
    <div className=" border-b border-b-gray-300 mb-4 py-4">
      <div className="flex">
        <img src={stock} alt="" className="h-20" />
        <div>
          <p>{item.volumeInfo.authors}</p>
          <p className=" text-gray-500 text-sm">{item.volumeInfo.categories}</p>
        </div>
      </div>
      <div>
        <p className=" font-bold text-2xl">{item.volumeInfo.title}</p>
        <Ratings ratingsCount={item?.volumeInfo?.ratingsCount} />
        <div className=" text-gray-500 text-sm">
          {/* <p>
            #{item.pages}, {item.year}, {item.publisher}
          </p> */}
          <p>{item.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
