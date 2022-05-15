import styled from "styled-components";

const EmbedVideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AutoHeightDiv = styled.div`
  position: relative;
  width: 90%;
  height: 0;
  top: 10vh;
  margin-left: auto;
  padding-bottom: calc((90% * 9) / 16);
  
  @media(max-width: 1000px) {
    width: 85%;
    padding-bottom: calc((85% * 9) / 16);
  }
  @media(max-width: 900px) {
    width: 95%;
    padding-bottom: calc((95% * 9) / 16);
    margin-right: auto;
  }
`;

const StyleIframe = styled.iframe`
  position: absolute;
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
  overflow: hidden;
  height: 100%;
  width: 90%;
  margin-top: 8vh;
  margin-left: 10%;
  
  @media(max-width: 900px) {
    margin-top: 10vh;
    margin-left: 2%;
  }

  & p {
    margin-top: 2%;
    width: 100%;
    font-weight: 700;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media(max-width: 900px) {
      margin-top: 6%;
    }
  }
  
  & button {
    float: right;
    padding: 0.5%;
    border: none;
    background-color: #171717;
    color: #ffffff;
    font-weight: 700;
  }
`;
  
export { EmbedVideoContainer, AutoHeightDiv, StyleIframe, StyleDiv, OptionDiv }