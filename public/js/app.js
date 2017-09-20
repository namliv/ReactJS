var list;
var Note = React.createClass({
	delete(){
        //gửi lên server bằng ajax
        $.post("/delete",{idXoa: this.props.id},function(data){
             list.setState({mang: data});
        });
	},
    render(){
        return(
            <div className="div-note">
               <p>{this.props.children}</p>
               <button onClick={this.delete}>Xoa</button>
            </div>
        );
    },
});

function addDiv(){
	ReactDOM.render(<InputDiv/>,document.getElementById('div-add'));
}

var List = React.createClass({
    getInitialState(){
    	list = this;
    	return {mang: []}
    },
    render(){
       return(
          <div className="div-list">
          <button onClick={addDiv}>Thêm</button>
          <div id="div-add"></div>
               {
               	this.state.mang.map(function(note,index){
                   return <Note key={index} id={index}>{note}</Note>
               })
           }
          </div>
       );
    },
    componentDidMount(){
    	var that = this;
    	$.post("/getNotes",function(data){
             that.setState({mang:data});
    	});
    }
});

var InputDiv = React.createClass({
	send(){
        list.setState({mang:list.state.mang.concat(this.refs.txt.value)});
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
	},
    render(){
        return(
            <div>
                 <input type="text" ref="txt" placeholder="Nhập Note" />
                 <button onClick={this.send}>Send</button>
            </div>
        );
    },
});

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);