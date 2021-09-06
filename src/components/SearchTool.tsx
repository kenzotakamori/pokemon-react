const SearchTool = (props: any) => {
  return (
    <div className="SearchTool">
      <input type="text" onChange={props.handleInputChange}/>
    </div>
  );
};

export default SearchTool;