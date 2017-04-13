'use strict'

class App extends React.Component{

    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(){
        //点击后调用
        console.log(this.refs.myInput);
        this.refs.myInput.focus();
    }

    componentDidMount(){
        //加载后调用
        this.refs.myInput2.focus();
    }

    render(){
        return (
            <div>
                <input ref="myInput" type="text"/>
                <input ref={(dom)=>{dom.focus()}}/> //render的时候调用
                <input ref="myInput2"/>
                <button onClick={this.handlerClick}>Submit</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))