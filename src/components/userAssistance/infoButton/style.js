import styled from "styled-components";
import { keyframes } from "styled-components";

const clippath = keyframes`
  0%,
  100% {
    clip-path: inset(0 0 95% 0);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }

`;

const StyleButton = styled.button`
  position: absolute;
  top: 3%;
  right: 15%;
  border: none;
  padding: 0.5%;
  color: ${ props => props.styleOpened ? '#ffffff' : '#000000' };
  background-color: ${ props => props.styleOpened ? '#000000' : '#ffffff' };
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #ffffff;
    border: ${ props => props.styleOpened ? '2px solid #ffffff' : 'none' };
    animation: ${clippath} 3s infinite linear;
  }
`;

export { StyleButton };