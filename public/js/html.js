var Note = React.createClass({
    render(){
       return <p>{this.props.children}</p>;
    },
});

var List = React.createClass({
	add(){
	   this.state.mang.push('CodeIngniter','NodeJs');
       this.setState(this.state);
	},
    getInitialState(){
         return {mang: ['Laravel','Yii','React']};
    },
    render(){
         return(
               <div>
               <button onClick={this.add}>Thêm</button>
                    {
                    	this.state.mang.map(function(note,index){
                             return <Note key={index}>{note}</Note>
                    	})
                    }
               </div>
         );
    },
});

ReactDOM.render(
    <div>
          <List/>
    </div>,
    document.getElementById('root')
);