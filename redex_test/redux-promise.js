const redux = require('redux')
const promise = require('redux-promise');

function reducer(state, action) {
    if (typeof state === "undefined")
        return {};
    switch (action.type) {
        case "changeName":
            return {name: action.payload.name};
        default:
            return state;
    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(promise));

function action(name) {
    return {payload: {name}, type: "changeName"}
}

let asyncAction = function (name) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(action(name));
        }, 1000)

    });
}

store.subscribe(() => console.log(store.getState()))

store.dispatch(asyncAction("aaaa"));
