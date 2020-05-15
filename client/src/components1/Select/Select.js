import React from 'react';

 
const options = [
  { value: 'city', label: 'City' },
  { value: 'state', label: 'State' },
  { value: 'general', label: 'General' },
];
 
class Select extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Select;