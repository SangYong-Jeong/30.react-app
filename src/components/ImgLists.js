import React from 'react';
import styled, { color, font, flex } from '../style';

import List from './ImgList';

const ListWrap = styled.ul`
  width: 101%;
  margin: 1.5em 0;
  ${flex({ w: 'wrap' })};
  font-family: ${font.noto};
  color: ${color.dark};
`;

const ImgLists = ({ lists }) => {
  return (
    <ListWrap>
      {lists.map((v, i) => (
        <List list={v} key={i} />
      ))}
    </ListWrap>
  );
};

export default React.memo(ImgLists);
