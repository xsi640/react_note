'use strict'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            top:0,
            left:0
        };
        this.handlerKeyup = this.handlerKeyup.bind(this);
    }

    handlerKeyup(e){
        switch (e.keyCode){
            case 37:
                this.setState({left:this.state.left-5})
                break;
            case 38:
                this.setState({top:this.state.top-5})
                break;
            case 39:
                this.setState({left:this.state.left+5})
                break;
            case 40:
                this.setState({top:this.state.top+5})
                break;
        }
    }

    render(){
        return (
            <div ref={dom=>{if(dom) dom.focus()}} style={{position:'relative',width:'350px', height:'450px', backgroundColor:'yellow'}} tabIndex={1} onKeyDown={this.handlerKeyup}>
                <div style={{top:this.state.top+'px',left:this.state.left+'px',position:'absolute',width:'10px', height:'10px', backgroundColor:'red'}}></div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))