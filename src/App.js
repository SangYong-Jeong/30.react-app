import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

import Search from './components/Search';
import Title from './components/Title';
import Lists from './components/Lists';

const kakaoKey = 'KakaoAK 4545d096ee04bdcea13013e722fa668f';
const kakaoURL = 'https://dapi.kakao.com/v2/search/image';
const headerTitle = '다찾아 이미지검색';
const subTitle = 'feat. Kakao';
const kakaoParams = {
  params: { size: 50 },
  headers: { Authorization: kakaoKey },
};

const App = () => {
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = useCallback(async (value) => {
    try {
      kakaoParams.params.query = value;
      const { data } = await axios.get(kakaoURL, kakaoParams);
      setAllPhoto(data.documents);
      setSearchPhoto(data.documents);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
      <Lists lists={searchPhoto} />
    </div>
  );
};

export default React.memo(App);
