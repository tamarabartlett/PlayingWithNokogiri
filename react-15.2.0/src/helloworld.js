var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: 'namarab'
    }
  },
  render: function(){
    return (
      <div>
        Hello {this.state.username}
      </div>
    )
  }
});

ReactDOM.render(<HelloUser />, document.getElementById('example'));