import { SearchProps } from '../interfaces/items';

function SearchBar({ onSearch }: SearchProps) {
  return (
    <div className="border-b border-gray-300 rounded-lg">
      <input
        className="w-full p-3 "
        type="text"
        placeholder="Start searching..."
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
