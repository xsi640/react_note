'use strict'

const Redux = require('redux');

const store = Redux.createStore(function (state, action) {
    if (typeof state === 'undefined') return {};
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, {name: action.name});
        default:
            return state;
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

//--------- 1 ---------
// const action = {
//     type:"changeName",
//     name:"suyang"
// }
//
// store.dispatch(action);

//--------- 2-------------
// function actionCreator(name){
//     return {
//         type:"changeName",
//         name
//     }
// }
// store.dispatch(actionCreator("suyang"))

//-----------3 --------------
// function createAction(action, dispatch) {
//     return function (opt) {
//         action = Object.assign({}, action, opt, {type: action.type});
//         dispatch(action);
//     }
// }
// var action = createAction({type: "changeName", name: "suyang"}, store.dispatch);
// action({name: "asdasda"});

//----------- 4---------------
// function createActions(actions, dispath) {
//
//     function createAction(action, dispatch) {
//         return function (opt) {
//             action = Object.assign({}, action, opt, {type: action.type});
//             dispatch(action);
//         }
//     }
//
//     if (typeof actions == 'function') {
//         return createAction(actions, dispath);
//     } else {
//         let result = {};
//         for (let k in actions) {
//             result[k] = createAction(actions[k], dispath);
//         }
//         return result;
//     }
// }
//
// let a = {type: "changeName", name: "aaaa"};
// let b = {type: "changeName", name: "bbbb"};
// let c = {type: "cchangeName", name: "cccc"};
// let actions = createActions({a, b, c}, store.dispatch);
// actions.a();
// actions.b();
// actions.c();


//----------------- 5 ---------------------
function a(name) {
    return {
        type:"changeName",
        name
    };
}
let actions = Redux.bindActionCreators({a}, store.dispatch);
actions.a("sasdad")