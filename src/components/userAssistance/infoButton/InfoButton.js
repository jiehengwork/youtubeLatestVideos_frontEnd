import React from 'react';
import { Link } from 'react-router-dom';

const styleLink = {
  'position': 'absolute',
  'top': '3%',
  'right': '5%',
  'textDecoration': 'none',
  'color': '#000000',
  'fontWeight': '700',
  'padding': '0.5%',
  'backgroundColor': '#f7f7f7',
}

const InfoButton = () => {
  return (
    <Link to='/info' style={ styleLink }>網頁導覽</Link>
  )
};

export default InfoButton;