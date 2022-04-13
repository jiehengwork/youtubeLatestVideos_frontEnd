import styled from 'styled-components';

const StyleVideoItemDiv = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2vh;
  cursor: pointer;
`;

const StyleImg = styled.img`
  height: 100%;
  margin-right: 5%;
`;

const StyleDiv = styled.div`
  width: 50%;
`;

const StyleH3 = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyleP = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { StyleVideoItemDiv, StyleImg, StyleDiv, StyleH3, StyleP }