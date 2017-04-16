import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import List from "./components/List"
import Editor from "./components/Editor"
import {createStore, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux'
import Navbar from './components/Navbar'
import {Grid, Row, Col} from 'react-bootstrap'
import Login from './components/Login'
import ReduxThunk from 'redux-thunk'


function reducer(state, action) {
    if (typeof state === "undefined") return {list: []}
    switch (action.type) {
        case "init":
            return action.payload;
        case "add":
            let list = state.list.concat({
                title: action.payload.title,
                content: action.payload.content
            });
            return Object.assign({}, state, {list});
        case "logined":
            if (action.error) {
                return Object.assign({}, state, {loginError: action.payload, logined: false});
            } else {
                return Object.assign({}, state, {loginError: null, logined: true});
            }
        case "logout":
            return Object.assign({}, state, {loginError: null, logined: false});
        default:
            return state;
    }
}

const store = createStore(reducer, {list: []}, applyMiddleware(ReduxThunk))

const actions = {

    init(){
        return function (dispatch) {
            fetch("data.json").then(function (res) {
                res.json().then(data => {
                    dispatch({
                        type: "init",
                        payload: data
                    });
                });
            })
        }
    },

    submit(title, content){
        return {
            type: "add",
            payload: {
                title,
                content
            }
        }
    },
    login(loginName, loginPwd){
        if (loginName === "admin" && loginPwd === "123123") {
            return {
                type: "logined",
                payload: {
                    loginName,
                    loginPwd
                }
            }
        } else {
            return {
                type: "logined",
                error: true,
                payload: new Error("登录失败")
            }

        }
    },
    logout(){
        return {
            type: "logout"
        }
    }
}

class App extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12}>
                            {Navbar}
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={8}>
                            <List list={this.props.list}/>
                            <Editor submit={this.props.submit}/>
                        </Col>
                        <Col md={4}>
                            {this.props.logined ? <div><h1>登录成功</h1>
                                    <button onClick={this.props.logout}>退出</button>
                                </div> : <Login login={this.props.login} loginError={this.props.loginError}/>}
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state;
}

let App2 = connect(mapStateToProps, actions)(App);

ReactDOM.render(<Provider store={store}>
    <App2/>
</Provider>, document.getElementById("root"))