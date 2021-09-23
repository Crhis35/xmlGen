import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const EditableSelect = ({ className, innerRef, ...props }) => {
  return (
    <Dropdown
      className={'select ' + (className ? className : '')}
      ref={innerRef}
      {...props}
    />
  );
};

export default EditableSelect;
