import React, { useRef, useState, useCallback } from 'react';
import '../scss/Search.scss';

const Search = ({ changeQuery }) => {
  const placeholder = '이미지 검색';
  const queryRef = useRef(null);
  const [query, setQuery] = useState('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      changeQuery(queryRef.current.value);
    },
    [changeQuery, queryRef]
  );
  const onChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );
  const onClick = useCallback(
    (e) => {
      setQuery('');
      changeQuery('');
    },
    [setQuery, changeQuery]
  );
  /* useEffect(() => {
    changeQuery(query);
  }, [query]); */
  return (
    <form className="search-wrapper" onSubmit={onSubmit}>
      <div className="search-wrap">
        <input
          type="text"
          ref={queryRef}
          className="form-control form-control-lg"
          name="query"
          placeholder={placeholder}
          autoFocus
          onChange={onChange}
          value={query}
        />
        {query.length ? (
          <i className="fa fa-times-circle bt-remove" onClick={onClick} />
        ) : (
          ''
        )}
      </div>
      <button className="btn btn-lg btn-warning bt-submit">이미지 검색</button>
    </form>
  );
};

export default React.memo(Search);
