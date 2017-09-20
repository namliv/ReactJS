function getName(name){
	alert(name);
}

var PhuongNam = React.createClass({
	addAge(){
       this.state.tuoiHienTai = parseInt(this.state.tuoiHienTai) + 1;
       this.setState(this.state);
	},
	layThongTin: function(){
         alert(this.props.children);
	},
	//khai bao state
	getInitialState()
	{
		return {tuoiHienTai : this.props.tuoiHienTai}
	},
	
	render: function(){
		return (
			<div>
				<h1 className="mauvang">địa chỉ {this.props.diachi} - quê quán {this.props.quequan}</h1>
				<DepTrai />
				<p>{this.props.children}</p>
				<p>Tuổi hiện tại là: {this.state.tuoiHienTai}</p>
				<button onClick={()=>{var str= this.props.diachi + ' ' + this.props.quequan; getName(str)}}>Click</button>
				<button onClick={this.addAge}>Click</button>
			</div>
			);
	},
});

var DepTrai = React.createClass({
	render: function(){
		return (
			<div>
			<h3>Đẹp Trai</h3>
			</div>
			);
	},
});

var InputTag = React.createClass({
	show(){
        var text = this.refs.txt.value;
        alert(text);
	},
	showSelect(){
		var sls = this.refs.sl.value;
		alert(sls);
	},
	render(){
        return (
        <div>
            <select ref="sl">
                <option value="aaa">AAA</option>
                <option value="bbb">BBB</option>
                <option value="ccc">CCC</option>
            </select>
            <input type="text" ref="txt" />
            <button onClick={this.show}>Hien Thi</button>
            <button onClick={this.showSelect}>Hien Thi SL</button>
		</div>
        );
	},
});

ReactDOM.render(
	<div>
	<InputTag/>
	<PhuongNam diachi="Ha Noi" quequan="Hung Yen" tuoiHienTai="22">Phuong Nam</PhuongNam>
	<PhuongNam diachi="Ha Noi" quequan="Thanh Hoa" tuoiHienTai="10">Van Dat</PhuongNam>
	</div>
	,document.getElementById("root"));	


