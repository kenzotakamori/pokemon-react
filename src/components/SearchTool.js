import React from 'react'

class SearchTool extends React.Component {
  render() {
    return (
      <input type="text" onChange={this.props.handleInputChange}/>
    );
  };
};

export default SearchTool;