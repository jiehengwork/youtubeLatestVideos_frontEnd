import styled from 'styled-components';

const StyleSwitchInput = styled.input`
  position: absolute;
  opacity: 0;
`;
const StyleAside = styled.aside`
  z-index: 1;
  height: 100%;
  width: 20vw;
  position: relative;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  
  // 側邊欄收合
  transition: 0.2s;
  transform: translateX(0);
  ${StyleSwitchInput}:checked + && {
    transform: translateX(-100%);
    position: absolute;
  }
  
  // 手機橫向
  @media(max-width: 1000px) {
    width: 25vw;
  }

  // 手機直向
  @media(max-width: 900px) {
    // 側邊攔收合
    transform: translateX(-100%);
    ${StyleSwitchInput}:checked + && {
      transform: translateX(0);
    }

    position: absolute;
    width: 100%;
  }
`;
const LogoStyleDiv = styled.div`
  margin-top: 1vh;
  margin-left: 5%;
  min-height: 5vh;
`;
const StyleLabel = styled.label`
  padding-top: 0.5%;
  margin-right: 10%;
  margin-left: ${props => props.fixedSwitch ? '.5%' : '0'};
  position: ${props => props.fixedSwitch ?  'absolute' : 'AUTO'};
  z-index: ${props => props.fixedSwitch ? '1' : '0'};
  color: #f7f7f7;

  ${StyleSwitchInput}:checked + && {
    color: #000000;
  }
  
  @media(max-width: 500px) {
    padding-top: ${props => props.fixedSwitch ? '1.5%' : '0.5%'};
    margin-left: ${props => props.fixedSwitch ? '5%' : '0'};
  }
`;
const StyleA = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #f7f7f7;

  &:visited {
    color: #f7f7f7;
  }
`;

export { StyleAside, StyleA, StyleLabel, LogoStyleDiv, StyleSwitchInput };