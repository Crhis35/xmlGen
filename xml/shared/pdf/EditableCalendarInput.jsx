import React from 'react';
import DatePicker from 'react-datepicker';

const EditableCalendarInput = ({ className, ...props }) => {
  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      placeholderText="Fecha"
      autoComplete="off"
      {...props}
    />
  );
};

export default EditableCalendarInput;
