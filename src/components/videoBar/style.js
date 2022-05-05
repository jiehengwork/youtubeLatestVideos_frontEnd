import styled from "styled-components";

const StyleVideoBarDiv = styled.div`
  width: 25vw;
  height: 89vh;
  margin-top: 10vh;
  margin-left: 2vh;
  overflow-y: scroll;
  
  @media(max-width: 500px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;
const PreviewDiv = styled.div`
  color: #f7f7f7;
  width: 100%;
  height: 10vh;
  display: flex;
  margin-bottom: 2vh;
`;

export { StyleVideoBarDiv, PreviewDiv }