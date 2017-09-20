var Com = React.createClass({
	changeImage(){
        this.setState({hinh : (this.state.hinh % 4) + 1});
	},
	getInitialState(){
        return {hinh : 1};
	},
	render(){
       return (
           <img width="200px" src={"/images/" + this.state.hinh + ".jpg"} /> 
       );
	},
	componentDidMount(){
       setInterval(this.changeImage, 1000);
	},
});

ReactDOM.render(
     <Com/>,
     document.getElementById('root')
);