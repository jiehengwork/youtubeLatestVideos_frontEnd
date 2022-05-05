import React from 'react';
import { Link } from 'react-router-dom';

const styleLink = {
  'text-decoration': 'none',
  'position': 'absolute',
  'top': '3%',
  'right': '5%',
  'font-weight': '700',
  'color': '#f7f7f7',
  'fontWeight': '700',

}

const InfoButton = () => {
  return (
    <Link to='/info' style={ styleLink }>網頁導覽</Link>
  )
};

export default InfoButton;