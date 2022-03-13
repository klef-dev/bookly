import './App.css';
import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Items from './components/Items';
import SearchBar from './components/Searchbar';
import { ItemParams, PaginationParams } from './interfaces/items';
import { useMutation } from 'react-query';
import { apiRequest } from './utils';

function App() {
  const [state, setState] = useState({
    items: [] as ItemParams[],
    pagination: {
      totalPages: 0,
      currentPage: 1,
      next: false,
      prev: false,
    } as PaginationParams,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const { mutateAsync, data, isLoading } = useMutation((q: string) =>
    apiRequest.get(`/v1?query=${q}`)
  );

  useEffect(() => {
    if (data) {
      setState({
        ...data?.data,
        pagination: {
          next: data?.data?.totalPages > data?.data?.currentPage,
          prev: data?.data?.currentPage > 1,
          totalPages: data?.data?.totalPages,
          currentPage: data?.data?.currentPage,
        },
      });
      console.log({ data });
    }
  }, [data]);

  const handleChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.length > 2) {
      setSearchTerm(value);
      await mutateAsync(value);
    } else {
      setState({
        items: [],
        pagination: {
          totalPages: 0,
          currentPage: 1,
          next: false,
          prev: false,
        },
      });
      setSearchTerm('');
    }
  };

  const handleFiltering = async (e: React.FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    if (value) {
      setState({
        ...state,
        items: state.items.filter(
          (item) => item.volumeInfo.ratingsCount === Number(value)
        ),
      });
    } else {
      setState({
        ...state,
        items: data?.data?.items || [],
      });
    }
  };

  return (
    <div className="md:flex md:justify-between pt-28 pb-20 px-28 h-full">
      <div className="md:mr-5 md:w-5/12">
        <Filter handleFiltering={handleFiltering} />
      </div>
      <div className="w-full bg-white shadow-xl">
        <SearchBar onSearch={handleChange} />
        {isLoading && searchTerm && <p>Loading...</p>}
        {searchTerm && !isLoading && <Items {...state} />}
      </div>
    </div>
  );
}

export default App;
