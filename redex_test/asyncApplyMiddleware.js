'use strict'

const Redux = require('redux');
const applyMiddleware = Redux.applyMiddleware;

const logger = store => nextDispatch => action => {
    console.log("start logger", action.type);

    console.log("middleware logger", store.getState());
    let result = nextDispatch(action);
    console.log("end logger", action.type);
    return result;
}

const thunk = store => nextDispatch => action => {
    if (typeof action == "function") {
        action(nextDispatch);
    } else {
        nextDispatch(action);
    }
}


const createStore = applyMiddleware(thunk, logger)(Redux.createStore);//异步中间件放到首位

function thunkAction(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "changeName",
                name
            });
        }, 3000);
    }
}

function reducer(state, action) {
    if (typeof state === 'undefined') return {name: ""};
    switch (action.type) {
        case "changeName":
            return {name: action.name};
        default:
            return state;
    }
}

const store = createStore(reducer, {name: ""});

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(thunkAction("sadadaasd"));

console.log("start");