import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleLink = styled(Link)`
  position: absolute;
  top: 3%;
  right: 5%;
  text-decoration: none;
  color: #000000;
  font-weight: 700;
  padding: 0.5%;
  background-color: #f7f7f7;

  @media( max-width: 900px ) {
    top:1.5%;
  }
`;


export { StyleLink };