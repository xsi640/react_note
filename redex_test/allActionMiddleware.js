const Redux = require('redux');
const applyMiddleware = Redux.applyMiddleware;

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

function proimiseAction(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                type: "changeName",
                name
            })
        }, 3000)
    })
}

function gAction() {
    return function* generatorAction() {
        let name = yield new Promise(function (resolve, reject) {
            setTimeout(function (params) {
                resolve('leo')
            }, 1000);
        });

        return {
            name,
            type: "changeName"
        }
    }
}

const asyncMiddleware = store => nextDispatch => action => {
    if (typeof  action === "function") {
        //generator
        if (action.constructor.name === "GeneratorFunction") {
            let g = action();
            let v = g.next();// v {done:true, value: new promise}
            function run(v) {
                if (v.done) {
                    nextDispatch(v.value);
                } else {
                    if (v.value && v.value instanceof Promise) {
                        v.value.then(function (name) {
                            run(g.next(name));
                        })
                    } else {
                        nextDispatch(v.value);
                    }
                }
            }

            run(v);
        } else {
            //thunk
            action(nextDispatch);
        }
    } else if (action instanceof Promise) {
        action.then(function (action) {
            nextDispatch(action);
        })
    } else {
        nextDispatch(action);
    }
}

const createStore = applyMiddleware(asyncMiddleware)(Redux.createStore);//异步中间件放到首位


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

store.dispatch(thunkAction("thunkAction"));
store.dispatch(proimiseAction("proimiseAction"));
store.dispatch(gAction("gAction"));

console.log("start");