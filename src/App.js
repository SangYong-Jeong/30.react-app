import { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Title from './components/Title';

const App = () => {
  const photoURL = 'https://jsonplaceholder.typicode.com/photos';
  const headerTitle = '다찾아 이미지검색';
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(photoURL);
        setAllPhoto(data);
        setSearchPhoto(data);
        return () => {};
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <Title title={headerTitle} />
      <Search />
    </div>
  );
};

export default App;
