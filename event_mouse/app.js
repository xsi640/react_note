'use strict'

const data = new Map();

data.set('id001', 'id001')
data.set('id002', 'id002')
data.set('id003', 'id003')
data.set('id004', 'id004')

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dragId:'',
            rightData: this.props.data,
            leftData: new Map()
        };

        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.drop2 = this.drop2.bind(this);
    }

    drag(e) {
        this.state.dragId=e.target.id;
    }

    drop(e){
        let value = this.state.rightData.get(this.state.dragId);
        this.state.rightData.delete(this.state.dragId);
        this.state.leftData.set(this.state.dragId ,value);
        this.forceUpdate();
    }

    drop2(e){
        let value = this.state.leftData.get(this.state.dragId);
        this.state.leftData.delete(this.state.dragId);
        this.state.rightData.set(this.state.dragId ,value);
        this.forceUpdate();
    }

    render() {

        let rightList = [];
        let leftList = [];

        for (let item of this.state.rightData) {
            rightList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            );
        }

        for (let item of this.state.leftData) {
            leftList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            );
        }

        return (
            <div>
                <div id="leftSection" onDragEnter={e=>e.preventDefault()} //
                     onDragOver={e=>e.preventDefault()} onDrop={this.drop}>
                    {leftList}
                </div>
                <div id="rightSection" onDragEnter={e=>e.preventDefault()} onDragOver={e=>e.preventDefault()} onDrop={this.drop2}>
                    {rightList}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App data={data}/>, document.getElementById('app'))