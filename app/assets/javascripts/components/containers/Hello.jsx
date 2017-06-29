var Hello = React.createClass({
  render: function() {
    var dispatch = this.props.dispatch;
    var actions = Redux.bindActionCreators(helloWorldActions, dispatch);
    return (
      <div>
        <h1> Welcome Omnicost ! </h1>
      </div>
    )
  }
})
