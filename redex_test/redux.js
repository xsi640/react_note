const Redux = require('redux')

const reducer = function (state, action) {
    if (action.type === 'changeName') {
        return Object.assign({}, state, {name: action.name});
    } else {
        return state;
    }
}

const store = Redux.createStore(reducer, {name:'leo'});

var {subscribe, dispatch, getState} = store;

subscribe(()=>console.log(getState()));

dispatch({type:'changeName', name:'aaaa'});