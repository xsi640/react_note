'use strict'

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.getPersons
        };
        this.handlerDelete = this.handlerDelete.bind(this);
        this.handlerSave = this.handlerSave.bind(this);
        this.handlerModify = this.handlerModify.bind(this);
    }

    handlerDelete() {
        this.props.onDelete(this.state.person.id);
    }

    handlerSave() {
        this.props.onSave(this.state.person);
    }

    handlerChange(e) {
        if (e.target.name == "name") {
            //修改name
            this.state.person.name = e.target.value;
        } else if (e.target.name == "age") {
            //修改age
            this.state.person.age = e.target.value;
        }
    }

    handlerModify() {
        this.state.person.type = 1;
        this.forceUpdate();
    }

    render() {
        if (this.state.person.type == 0) {
            return (
                <tr>
                    <td>{this.state.person.id}</td>
                    <td>{this.state.person.name}</td>
                    <td>{this.state.person.age}</td>
                    <td>
                        <button className="btn btn-default" onClick={this.handlerModify}>修改</button>
                        <button className="btn btn-default" onClick={this.handlerDelete}>删除</button>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>{this.props.getPersons.id}</td>
                    <td>
                        <input type="text" className="form-control" name="name" placeholder="请输入姓名"
                               defaultValue={this.state.person.name}
                               onChange={(e) => this.handlerChange(e)}
                        ></input>
                    </td>
                    <td>
                        <input type="text" className="form-control" name="age" placeholder="请输入年龄"
                               defaultValue={this.state.person.age}
                               onChange={(e) => this.handlerChange(e)}
                        />
                    </td>
                    <td>
                        <button className="btn btn-default" onClick={this.handlerSave}>保存</button>
                        <button className="btn btn-default" onClick={this.handlerDelete}>删除</button>
                    </td>
                </tr>
            );
        }
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            list: new Set()
        };
        this.handlerAdd = this.handlerAdd.bind(this);
        this.handlerDelete = this.handlerDelete.bind(this);
        this.handlerSave = this.handlerSave.bind(this);
    }

    handlerAdd() {
        let id = ++this.state.id;
        this.state.list.add({id: id, name: '', age: '', type: 1});
        console.log('add temp id:' + id);
        this.forceUpdate();
    }

    handlerDelete(id) {
        let p = null;
        for (let currentPerson of this.state.list) {
            if (currentPerson.id === id) {
                p = currentPerson;
                break;
            }
        }
        if (p != null) {
            this.state.list.delete(p);
            console.log('delete id:' + p.id);
        }
        this.forceUpdate();
    }

    handlerSave(p) {
        if (p.type == 1) {
            //新增
            p.type = 0;
            console.log('add id:' + p.id);
        } else if (p.type == 0) {
            //修改
            for (let currentPerson of this.state.list) {
                if (currentPerson.id === p.id) {
                    currentPerson.name = p.name;
                    currentPerson.age = p.age;
                    console.log('modify id:' + p.id);
                    break;
                }
            }
        }
        this.forceUpdate();
    }

    render() {

        let rows = [];
        for (let p of this.state.list) {
            rows.push(<Row key={p.id} person={p} onDelete={this.handlerDelete} onSave={this.handlerSave}/>)
        }

        return (
            <div>
                <button className="btn btn-default" onClick={this.handlerAdd}>新增</button>
                <table className="table table-responsive">
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>操作</th>
                    </tr>
                    {rows}
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>
    , document.getElementById('app'));