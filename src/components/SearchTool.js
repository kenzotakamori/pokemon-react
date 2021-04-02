import React from 'react'

class SearchTool extends React.Component {
  render() {
    return (
      <div className="SearchTool">
        <input type="text" onChange={this.props.handleInputChange}/>
      </div>
    );
  };
};

export default SearchTool;