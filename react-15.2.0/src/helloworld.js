var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: 'namarab'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        Hello {this.state.username} <br />
        Derp Write a thing: <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});

ReactDOM.render(<HelloUser />, document.getElementById('loginForm'));

var HelloWorld = React.createClass({
  render: function(){
    return (
      <h1>
        Hello World!
      </h1>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('heading'))