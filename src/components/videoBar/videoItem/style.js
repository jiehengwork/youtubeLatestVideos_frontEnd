import styled from 'styled-components';

const StyleVideoItemA = styled.a`
  width: 100%;
  height: 10vh;
  display: flex;
  margin-bottom: 2vh;
  cursor: pointer;
  
  @media(max-width: 500px) {
    margin-bottom: 0;
    margin-top: 2vh;
    margin-left: 5%;
  }
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
  color: #ffffff;
`;

const StyleP = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
`;

export { StyleVideoItemA, StyleImg, StyleDiv, StyleH3, StyleP }