'use strict'

import React from 'react';
import Row from './row';

export class App extends React.Component {

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
                    <tbody>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>操作</th>
                    </tr>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = App;