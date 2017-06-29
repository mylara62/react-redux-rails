var HelloWorld = React.createClass({
  render: function() {
    return(
      <ReactRedux.Provider store={helloStore}>
        <Hello />
      </ReactRedux.Provider>
    );
  }
});
