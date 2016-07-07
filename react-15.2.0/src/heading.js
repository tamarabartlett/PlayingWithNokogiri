var Derp = React.createClass({
  getInitialState: function(){
    return {
      isItDerpy: 'Truth'
    }
  },
  handleClick: function() {
  	this.setState({
      isItDerpy: 'Falsey'
    });
  },
  render: function(){
    return (<h2 onClick={this.handleClick}>{this.state.isItDerpy}</h2>)
  }
});

ReactDOM.render(<Derp />, document.getElementById('derp'));