'use strict'

const Redux = require('redux')
const createStore = Redux.createStore;
const combineReducers = Redux.combineReducers;

function aReducer(state, action) {
    if (typeof state == 'undefined')
        return [];
    switch (action.type) {
        case 'a':
            return state.concat([action.data]);
        default:
            return state;
    }
}

function bReducer(state, action) {
    if (typeof state == 'undefined')
        return [];
    switch (action.type) {
        case 'b':
            return state.concat([action.data]);
        default:
            return state;

    }
}

const reducers = combineReducers({a: aReducer, b: bReducer});

const store = createStore(reducers, {a: [111], b: [222]});

var {subscribe, dispatch, getState} = store;

subscribe(() => console.log(getState()));

dispatch({type: 'a', data: 'aaaa'});
dispatch({type: 'b', data: 'aaaa'});