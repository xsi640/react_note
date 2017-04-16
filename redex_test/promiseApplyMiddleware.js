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




function proimiseAction(name) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                type:"changeName",
                name
            })
        }, 3000)
    })
}

const promise = store => nextDispatch => action =>{
    if(action instanceof Promise){
        action.then(function (action) {
            nextDispatch(action);
        })
    }else {
        nextDispatch(action);
    }
}


const createStore = applyMiddleware(promise, logger)(Redux.createStore);//异步中间件放到首位


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

store.dispatch(proimiseAction("sadadaasd"));

console.log("start");