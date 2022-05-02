import styled from "styled-components";

const StyleVideoBarDiv = styled.div`
  width: 25vw;
  height: 94vh;
  margin-top: 5vh;
  margin-left: 2vh;
  overflow-y: scroll;
  
  @media(max-width: 500px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;

export { StyleVideoBarDiv }