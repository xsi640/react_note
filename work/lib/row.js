'use strict'
import React from 'react';

export class Row extends React.Component {
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

module.exports = Row;