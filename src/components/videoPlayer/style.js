import styled from "styled-components";

const AutoHeightDiv = styled.div`
  margin-left: 5%;
  position: relative;
  width: 70%;
  height: 0;
  padding-bottom: 39.375%;

  @media(max-width: 500px) {
    margin: 0;
    width: 100%;
    padding-bottom: 56.25%;
  }
`;
const StyleIframe = styled.iframe`
  position: absolute;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export { AutoHeightDiv, StyleIframe }