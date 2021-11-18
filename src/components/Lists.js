import React, { useCallback } from 'react';

const Lists = ({ lists }) => {
  return (
    <ul>
      {lists.map((v, i) => (
        <li key={i}>
          <img src={v.thumbnail_url} className="w-100" alt="" />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Lists);
