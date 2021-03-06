import styled from 'styled-components';

const StyleA = styled.a`
  display: flex;
  height: 5vh;
  width: 90%;
  padding: 0 5%;
  line-height: 100%;
  align-items: center;
  text-decoration: none;
  margin-bottom: 5%;

  &:visited {
    color: #000000;
  }

  @media(max-width: 900px) {
    margin-bottom: 2%;
  }
`;
const StyleImg = styled.img`
  height: 100%;
  margin-right: 10%;
  border-radius: 25px;

  @media(max-width: 500px) {
  margin-right: 5%;
  }
`;
const StyleP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #f7f7f7;
`;
const StyleButton = styled.button`
  margin-left: auto;
  min-width: 20%;
  height:80%;
  padding: 0;
  border: none 0;
  border-radius: 5px;
  background-color: #CF0000;
  cursor: pointer;
  color: #ffffff;
  
  &:hover {
    background-color: #EB0000;
  }
`;

export {StyleA, StyleImg, StyleP, StyleButton}