import styled from 'styled-components';

const StyleForm = styled.form`
  width: 90%;
  display: flex;
  margin: 0 5% 5% 5%;
  border: 1px solid #000000;
  border-radius: 25px;
  `;
  const StyleInput = styled.input`
  margin-left: 5%;
  width: 75%;
  border: none;
  background-color: transparent;

  outline: none;
  `;
  const StyleButton = styled.button`
  width: 20%;
  border: none;
  background-color: transparent;
`;

export {StyleForm, StyleInput, StyleButton};