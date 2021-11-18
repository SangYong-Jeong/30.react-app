import '../scss/Search.scss';

const Search = () => {
  const placeholder = '이미지 검색';
  return (
    <form className="search-wrapper">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder={placeholder}
      />
    </form>
  );
};

export default Search;
