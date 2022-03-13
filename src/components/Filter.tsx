import { FilterProps } from '../interfaces/items';

function Filter({ handleFiltering }: FilterProps) {
  return (
    <div className="md:p-2 mb-4">
      <h4>Star count (1-5)</h4>
      <select name="" id="" className="w-full p-2" onChange={handleFiltering}>
        <option value="">All stars</option>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <option key={i} value={i + 1}>
              {' '}
              {i + 1}{' '}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
