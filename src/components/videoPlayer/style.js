import styled from "styled-components";

const EmbedVideoContainer = styled.div`
  width: 100%;
`;
const AutoHeightDiv = styled.div`
  // margin-left: 5%;
  margin-left: auto;
  position: relative;
  width: 95%;
  height: 0;
  padding-bottom: calc((95% * 9) / 16);
  
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

export { EmbedVideoContainer, AutoHeightDiv, StyleIframe }