import styled from 'styled-components';

const StyleSearchBlock = styled.div`
  border-bottom: solid #131313;
  height: 13vh;
`;
const StyleForm = styled.form`
  width: 90%;
  display: flex;
  margin: 0 5% 10% 5%;
  border: 1px solid #f7f7f7;
  border-radius: 25px;
  `;
  const StyleInput = styled.input`
  margin-left: 5%;
  width: 75%;
  border: none;
  background-color: transparent;
  color: #f7f7f7;
  
  outline: none;
  `;
  const StyleButton = styled.button`
  width: 20%;
  border: none;
  background-color: transparent;
  color: #f7f7f7;
  `;

export { StyleSearchBlock, StyleForm, StyleInput, StyleButton };