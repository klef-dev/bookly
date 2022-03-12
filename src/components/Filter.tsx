import React from 'react';
import { FilterProps } from '../interfaces/items';

function Filter({ initialItems, updateItems }: FilterProps) {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    if (value) {
      const filtered = initialItems.filter(
        (item) => item.ratings === Number(value)
      );
      updateItems(filtered);
    } else {
      updateItems(initialItems);
    }
  };
  return (
    <div className="md:p-2 mb-4">
      <h4>Star count (1-5)</h4>
      <select name="" id="" className="w-full p-2" onChange={handleChange}>
        <option value="">All stars</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
}

export default Filter;
