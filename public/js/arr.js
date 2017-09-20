var Note = React.createClass({
    render(){
        return (
        	<div>
	            <img width="200px" src={this.props.src} />
	            <p>{this.props.children}</p>
        	</div>
        );
    },
});

var List = React.createClass({
	add(){
		this.state.mang.push({srcHinh: 'images/3.jpg' , noiDung: 'Yii'});
        this.setState(this.state);
	},
	getInitialState(){
		return {mang: [
            {srcHinh: '/images/1.jpg' , noiDung: 'Laravel'},
            {srcHinh: '/images/2.jpg' , noiDung: 'NodeJs'}      
		]}
	},

	render(){
         return(
            <div>
            <button onClick={this.add}>ADD</button>
                 {
                 	this.state.mang.map(function(note, index){
                        return <Note key={index} src={note.srcHinh}>{note.noiDung}</Note>                    
 	                })
                 }
            </div>
         );
	},
});

ReactDOM.render(
   <List/>,
   document.getElementById('root')
);