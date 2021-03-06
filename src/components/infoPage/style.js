import styled from 'styled-components';

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 99vh;
  align-items: center;

  div {
    width: 67%;
    
    @media(max-width: 900px) {
      width: 95%;
    }
  }

  h2 {
    margin-top: 2%;
    color: #dfdfdf;
    font-weight: 700;
  }

  h3 {
    margin-top: 2%;
    color: #dfdfdf;
    font-weight: 700;
  }

  p {
    margin-top: 2%;
    color: #dfdfdf;
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: 2px;
    
    @media(max-width: 900px) {
      font-size: 1rem;
  }
  `;
  
export { StyleDiv };