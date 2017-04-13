const List = require('./list');
const ReactDOM = require('react-dom');
const React = require('react');
const Dispatcher = require('./Dispatcher');

// Dispatcher.use((action, next) => {
//     setTimeout(() => {
//         console.log('log---------', action.actionType);
//         next();
//     }, 2000);
// }).use((action, next) => {
//     setTimeout(() => {
//         console.log('bzd----------', action.actionType);
//         next();
//     }, 2000);
// });

ReactDOM.render(<List/>, document.body);