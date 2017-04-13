'use strict'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'ssss',
            checkValue:true,
            radioValue:false,
            selectValue:'A',
            multiSelectValue:['A','B']
        };
    }

    render(){
        return (
            <form>
                <input type="text" defaultValue="zhangsan" onChange={(e)=>{this.setState({inputValue: e.target.value})}}/>
                <input type="text" value={this.state.inputValue} onChange={(e)=>{this.setState({inputValue: e.target.value})}}/>
                <input type="checkbox" checked={this.state.checkValue} onChange={(e)=>{this.setState({checkValue:!this.state.checkValue})}}/>
                <input type="radio" checked={this.state.radioValue} onChange={(e)=>{this.setState({radioValue:!this.state.radioValue})}}/>
                <select value={this.state.selectValue} onChange={(e)=>{this.setState({selectValue:e.target.value})}}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <select multiple defaultValue={this.state.multiSelectValue}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <textarea value='okokokookoo'></textarea>
            </form>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))