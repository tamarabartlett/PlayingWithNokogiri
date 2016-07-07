var Derp = React.createClass({
  getInitialState: function(){
    return {
      isItDerpy: 'Truth'
    }
  },
  render: function(){
    return (<h2>{this.state.isItDerpy}</h2>)
  }
});

ReactDOM.render(<Derp />, document.getElementById('derp'));