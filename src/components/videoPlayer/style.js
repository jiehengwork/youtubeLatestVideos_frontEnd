import styled from "styled-components";

const EmbedVideoContainer = styled.div`
  width: 100%;
`;
const AutoHeightDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: calc((90% * 9) / 16);
  
  @media(max-width: 500px) {
    width: 95%;
    padding-bottom: calc((95% * 9) / 16);
  }
`;
const StyleIframe = styled.iframe`
  position: absolute;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;

  @media(max-width: 1000px) {
    top: 0;
  }
  `;
const OptionDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 90%;
  margin-top: 5vh;
  margin-left: 5%;
  padding-bottom: calc(95vh - ((98% * 9) / 16));
  
  @media(max-width: 1000px) {
    margin-top: 0;
  }

  & p {
    font-weight: 700;
    color: #ffffff;
  }

  & button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    padding: 0.5%;
    background-color: #171717;
    color: #ffffff;
    font-weight: 700;
  }
`;
  
export { EmbedVideoContainer, AutoHeightDiv, StyleIframe, OptionDiv }