import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Title from './components/Title';

const App = () => {
  const photoURL = 'https://dapi.kakao.com/v2/search/imag';
  const headerTitle = '다찾아 이미지검색';
  const subTitle = 'feat. Kakao';
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = useCallback(
    async (value) => {
      setAllPhoto([...allPhoto, value]);
    },
    [allPhoto]
  );
  const genCount = (photo) => {
    console.log('hihi');
    return photo.length + '개 입니다.';
  };
  const listCount = useMemo(() => genCount(searchPhoto), [searchPhoto]);

  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
      <div>{listCount}</div>
    </div>
  );
};

export default React.memo(App);
