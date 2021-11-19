import React from 'react';
import styled, { media } from '../style';

const List = styled.li`
  width: 11.5%;
  margin-right: 1%;
  margin-bottom: 1%;
  @media ${media.lg} {
    width: 13.2857%;
  }
  @media ${media.md} {
    width: 15.6667%;
  }
  @media ${media.sm} {
    width: 19%;
  }
  @media ${media.xs} {
    width: 24%;
  }
`;

const ImgList = ({ list }) => {
  return (
    <List>
      <img src={list.thumbnail_url} className="w-100" alt="" />
    </List>
  );
};

export default React.memo(ImgList);
