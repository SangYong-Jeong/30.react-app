import '../scss/Title.scss';

const Title = ({ title }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title">
        <i className="fa fa-image icon" />
        {title}
      </h1>
    </div>
  );
};

export default Title;
