var Heading = React.createClass({
	render: function(){
		return(
			<h1> You're a Fool!</h1>
		)
	}	
});

ReactDOM.render(<Heading />, document.getElementById('heading'))