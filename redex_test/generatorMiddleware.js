const Redux = require('redux');
const applyMiddleware = Redux.applyMiddleware;

const logger = store => nextDispatch => action => {
    console.log("start logger", action.type);

    console.log("middleware logger", store.getState());
    let result = nextDispatch(action);
    console.log("end logger", action.type);
    return result;
}

function* generatorAction() {
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

const generator = store => nextDispatch => action => {
    if (typeof action === "function" && action.constructor.name === "GeneratorFunction") {
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
    }
};

const createStore = applyMiddleware(generator, logger)(Redux.createStore);//异步中间件放到首位


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

store.dispatch(generatorAction);

console.log("start");