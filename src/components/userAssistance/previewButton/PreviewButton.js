import React from 'react';
import { StyleButton } from './style'; // css
import { useSelector, useDispatch } from 'react-redux'; // redux

const PreviewButton = () => {
  const PreviewDispatch = useDispatch()
  const opened = useSelector( state => state.previewReducer.preview )

  const buttonHandler = () => {
    PreviewDispatch({
      type: 'REVERSE',
    })
  }

  return (
    <StyleButton onClick={ buttonHandler } styleOpened={ opened }>預覽模式</StyleButton>
  )
};

export default PreviewButton;