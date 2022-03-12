import React from 'react';
import { FilterProps } from '../interfaces/items';

function Searchbar({ initialItems, updateItems }: FilterProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (value) {
      const filtered = initialItems.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filtered);
      updateItems(filtered);
    } else {
      updateItems(initialItems);
    }
  };
  return (
    <div className="border-b border-gray-300 rounded-lg">
      <input
        className="w-full p-3 "
        type="text"
        placeholder="Start searching..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Searchbar;
