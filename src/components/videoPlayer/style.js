import styled from "styled-components";

const EmbedVideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AutoHeightDiv = styled.div`
  margin-left: auto;
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: calc((90% * 9) / 16);
  
  @media(max-width: 1000px) {
    width: 85%;
    padding-bottom: calc((85% * 9) / 16);
  }
  @media(max-width: 500px) {
    width: 95%;
    padding-bottom: calc((95% * 9) / 16);
    margin-right: auto;
  }
`;

const StyleIframe = styled.iframe`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  `;

const StyleDiv = styled.div`
  color: #ffffff;
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 500px) {
    height: 25vh;
  }
  
  & p {
    font-size: 20px;
    
    @media(max-width: 1000px) {
      font-size: 16px;
    }
  }
`

const OptionDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 90%;
  margin-top: 5vh;
  margin-left: 10%;
  padding-bottom: calc(95vh - ((98% * 9) / 16));
  
  @media(max-width: 1000px) {
    margin-top: 5vh;
    padding-bottom: 0;
  }

  & p {
    margin-top: 2%;
    width: 100%;
    font-weight: 700;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  & button {
    position: absolute;
    bottom: 5%;
    right: 0;
    border: none;
    padding: 0.5%;
    background-color: #171717;
    color: #ffffff;
    font-weight: 700;

    @media(max-width: 500px) {
      position: relative;
      float: right;
    }
  }
`;
  
export { EmbedVideoContainer, AutoHeightDiv, StyleIframe, StyleDiv, OptionDiv }