'use strict'

const Redux = require('redux');
const applyMiddleware = Redux.applyMiddleware;

const logger = store => nextDispatch => action => {
    console.log("start", action.type);

    console.log("middleware", store.getState());
    let result = nextDispatch(action);
    console.log("end", action.type);
    return result;
}

// ---------------- 同上 ----------------------------
// const logger = function (store) {
//     return function (nextDispatch) {
//         return function(action){
//             console.log("start", action.type);
//
//             console.log("middleware", store.getState());
//             let result = nextDispatch(action);
//             console.log("end", action.type);
//             return result;
//         }
//     }
// }
//---------------------------------------------

const createStore = applyMiddleware(logger)(Redux.createStore);//applyMiddleware(logger, xxx, xxx),从左到右执行

const reducer = function (state, action) {
    if (typeof state === "undefined") return {name: ""};
    switch (action.type) {
        case "changeName":
            return {name: action.name};
        default:
            return state;
    }
}

const store = createStore(reducer, {name: "aaaa"});

store.subscribe(() => console.log("subscribe", store.getState()));

store.dispatch({type: "changeName", name: "suyang"});