import React from 'react';
import { TextArea } from 'semantic-ui-react';

const EditableTextarea = ({ className, rows, ...props }) => {
  return (
    <TextArea
      minRows={rows || 1}
      className={'input ' + (className ? className : '')}
      {...props}
    />
  );
};

export default EditableTextarea;
