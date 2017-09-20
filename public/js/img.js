var Com = React.createClass({
    next(){
      this.setState({hinh : this.state.hinh == 4 ? 1 : this.state.hinh + 1});
    },
    pre(){
      this.setState({hinh : this.state.hinh == 1 ? 4 : this.state.hinh  -1 });
    },
    getInitialState()
    {
        return {hinh : 1};
    },
    render(){
       return(
          <div>
               <img width="200px" src={"/images/" + this.state.hinh + ".jpg"} />
               <hr/>
               <button onClick={this.next}>Next</button>
               <button onClick={this.pre}>Pre</button>
          </div>
       );
    }, 
});

ReactDOM.render(
     <Com/>,
     document.getElementById('root')
);