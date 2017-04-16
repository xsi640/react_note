const React = require("react")
const ReactDOM = require("react-dom")
const Redux = require('redux')
const {connect, Provider} = require('react-redux')

function testReducer(state, action) {
    if (typeof state === 'undefined') return {name: "", number: 0}
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, action.payload);
        case "access":
            return Object.assign({}, state, {number: ++state.number});
        default:
            return state;
    }
}

const store = Redux.createStore(Redux.combineReducers({testReducer}));

class UI extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.number}</p>
                <input onChange={event => this.props.changeName(event.target.value)}/>
                <button onClick={event => this.props.access()}> access</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
{
    name: state.testReducer.name,
    number: state.testReducer.number
})

const mapDispatchToProps = {
    changeName(name){
        return {
            type: "changeName",
            payload: {name}
        }
    },
    access(){
        return {type: "access"}
    }
}

const UIX = connect(mapStateToProps, mapDispatchToProps)(UI);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <UIX/>
            </Provider>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));


// function render() {
//     let state = store.getState();
//     ReactDOM.render(<UI changeName={actions.changeName} access={actions.access} name={state.name} number={state.number}/>,
//         document.getElementById("root"));
// }
//
// store.subscribe(render);

// render();