const redux = require('redux')
const thunk = require('redux-thunk').default
//import thunk from 'redux-thunk'

//let createStore = redux.applyMiddleware(thunk)(redux.createStore); old

function reducer(state, action) {
    if (typeof state === "undefined")
        return {};
    switch (action.type) {
        case "changeName":
            return {name: action.name};
        default:
            return state;
    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(thunk.withExtraArgument({default: "javascript"})));

function action(name) {
    return {name, type: "changeName"}
}

let asyncAction = function (name) {
    // let action = {
    //     type: "changeName",
    //     name
    // }
    //
    // return (dispatch, getState, api) => {
    //     if (getState().name === "tom")return;
    //     setTimeout(() => {
    //         console.log(api)
    //         dispatch(action);
    //     }, 1000);
    // };

    return dispatch => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                dispatch(action("action1"));
                resolve();
            }, 1000)

        }).then(function (params) {
            return new Promise((resolve) => {
                setTimeout(()=>{
                    dispatch(action("action2"));
                    resolve();
                },1000);
            });
        }).then(function (params) {
            dispatch(action("action3"));
        })
    }
}

store.subscribe(() => console.log(store.getState()))

store.dispatch(asyncAction());
