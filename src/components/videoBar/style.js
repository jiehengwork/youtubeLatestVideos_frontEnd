import styled from "styled-components";

const StyleVideoBarDiv = styled.div`
  width: 20vw;
  height: 94vh;
  margin-top: 5vh;
  overflow-y: scroll;
  
  @media(max-width: 500px) {
    width: 100%;
  }
`;

export { StyleVideoBarDiv }