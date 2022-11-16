import React from 'react';

import { FiterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FiterInput
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
