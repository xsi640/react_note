import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class Login extends Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        let loginDom = ReactDOM.findDOMNode(this.refs.loginName);
        let pwdDom = ReactDOM.findDOMNode(this.refs.loginPwd);
        this.props.login(loginDom.value, pwdDom.value);

        loginDom.value = "";
        pwdDom.value = "";
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <FormGroup controlId="formControlsLoginName" validationState={this.props.loginError?"error":""}>
                    <ControlLabel>登录名称 {this.props.loginError?this.props.loginError.message:""}</ControlLabel>
                    <FormControl type="text" ref="loginName" placeholder="请输入登录名称"/>
                </FormGroup>
                <FormGroup controlId="formControlsLoginPwd">
                    <ControlLabel>登录密码</ControlLabel>
                    <FormControl type="password" ref="loginPwd" placeholder="请输入登录密码"/>
                </FormGroup>
                <Button type="submit" onClick={this.login}>
                    登录
                </Button>
            </div>
        );
    }
}

module.exports = Login;