import styled from 'styled-components';

const StyleAppDiv = styled.div`
  height: 100%;
  position: relative;
  display: flex;

  @media(max-width: 500px) {
    display: block;
  }
`;

export { StyleAppDiv };