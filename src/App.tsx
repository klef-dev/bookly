import './App.css';
import data from './utils/dump.json';
import { useState } from 'react';
import Filter from './components/Filter';
import Items from './components/Items';
import Searchbar from './components/Searchbar';
import { ItemParams } from './interfaces/items';

function App() {
  const [state, setState] = useState({
    pagination: { prev: true, next: true, pageNum: 1 },
    items: data,
  });
  const updateItems = (filtered: ItemParams[]) => {
    setState({ ...state, items: filtered });
    return filtered;
  };
  return (
    <div className="md:flex md:justify-between pt-28 pb-20 px-28 h-full">
      <div className="md:mr-5 md:w-5/12">
        <Filter initialItems={data} updateItems={updateItems} />
      </div>
      <div className="w-full bg-white shadow-xl">
        <Searchbar initialItems={data} updateItems={updateItems} />
        <Items {...state} />
      </div>
    </div>
  );
}

export default App;
