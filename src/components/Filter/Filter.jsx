import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
export default Filter;
