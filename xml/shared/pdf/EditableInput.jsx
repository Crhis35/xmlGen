import React from 'react';
import compose from './styles/compose';

const EditableInput = ({ className, placeholder, ...props }) => {
  return (
    <input
      type="text"
      className={'input' + (className ? className : '')}
      placeholder={placeholder || ''}
      {...props}
    />
  );
};

export default EditableInput;
