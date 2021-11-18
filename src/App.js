import { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Title from './components/Title';

const App = () => {
  const photoURL = 'https://dapi.kakao.com/v2/search/imag';
  const headerTitle = '다찾아 이미지검색';
  const subTitle = 'feat. Kakao';
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = async (value) => {
    console.log(value);
    // await axios.get();
  };

  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
    </div>
  );
};

export default App;
