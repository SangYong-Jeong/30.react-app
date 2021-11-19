import React from 'react';
import '../scss/Title.scss';

const MainTitle = ({ title, subTitle }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title">
        <i className="fa fa-image icon" />
        {title}
        <small className="ml-3">{subTitle}</small>
      </h1>
    </div>
  );
};

export default React.memo(MainTitle);
