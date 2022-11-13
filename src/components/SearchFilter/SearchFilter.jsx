import React from 'react';

export class Filter extends React.Component {
  state = {
    filter: '123',
  };
  onFilterInputChange = event => {
    console.log(event.currentTarget.value);
  };

  render() {
    return (
      <>
        <label>Find contacts by name</label>
        <input
          type="text"
          onInput={this.onFilterInputChange}
          name="filter"
          required
        />
      </>
    );
  }
}
