import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap'

//props {submit(value)}
class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.submit = this.submit.bind(this);
    }

    submit() {
        let titleDom = ReactDOM.findDOMNode(this.refs.title);
        let contentDom = ReactDOM.findDOMNode(this.refs.content);
        this.props.submit(titleDom.value, contentDom.value);
        titleDom.value = "";
        contentDom.value = "";
    }

    render() {
        return (
            <div>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>标题</ControlLabel>
                    <FormControl type="text" ref="title" placeholder="请输入标题"/>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>内容</ControlLabel>
                    <FormControl ref="content" componentClass="textarea" placeholder="请输入内容"/>
                </FormGroup>
                <Button type="submit" onClick={this.submit}>
                    添加
                </Button>
            </div>);
    }
}

module.exports = Editor;