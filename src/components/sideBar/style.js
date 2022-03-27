import styled from 'styled-components';

const StyleSwitchInput = styled.input`
  position: absolute;
  opacity: 0;
`;
const StyleAside = styled.aside`
  z-index: 1;
  height: 100%;
  width: 15vw;
  position: absolute;
  background-color: #E3D9C6;

  // 側邊欄收合
  transition: 0.2s;
  transform: translateX(-100%);
  ${StyleSwitchInput}:checked + && {
    transform: translateX(0);
  }

  @media(max-width: 500px) {
    width: 100%;
  }
`;
const LogoStyleDiv = styled.div`
  margin-left: 5%;
  margin-bottom: 10%;
`;
const StyleLabel = styled.label`
  margin-right: 10%;
  margin-left: ${props => props.fixedSwitch ? '.5%' : '0'};
  position: ${props => props.fixedSwitch ?  'absolute' : 'AUTO'};
  z-index: ${props => props.fixedSwitch ? '1' : '0'};
  
  @media(max-width: 500px) {
    margin-left: ${props => props.fixedSwitch ? '5%' : '0'};
  }
`;
const StyleA = styled.a`
  text-decoration: none;

  &:visited {
    color: #000000;
  }
`;

export { StyleAside, StyleA, StyleLabel, LogoStyleDiv, StyleSwitchInput };