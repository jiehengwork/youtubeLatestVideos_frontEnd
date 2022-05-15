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
  right: 14.5%;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5%;
  color: ${ props => props.styleOpened ? '#f7f7f7' : '#000000' };
  background-color: ${ props => props.styleOpened ? '#000000' : '#f7f7f7' };
  
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

  @media( max-width: 900px ) {
    right: 20%;
    top: 1.5%;
  }
  @media( max-width: 600px ) {
    right: 25%;
  }
  @media( max-width: 300px ) {
    right: 30%;
  }
`;

export { StyleButton };