import styled from "styled-components";

const StyleVideoBarDiv = styled.div`
  width: 25vw;
  height: 89vh;
  margin-top: 10vh;
  margin-left: 2vh;
  overflow-y: scroll;
  
  @media(max-width: 900px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;

export { StyleVideoBarDiv }