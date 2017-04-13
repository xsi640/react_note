const React = require('react');
const Store = require('./store');
const Actions = require('./actions')

const actions= new Actions();
const store = new Store();

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    add() {
        actions.add(this.refs.nameInput.value);
    }

    componentDidMount() {

        actions.getAll();

        store.on('change', (list) => {
            this.setState({list: list})
        });
    }

    render() {
        return (
            <ul>
                {this.state.list.map((item) => {
                    return (<li>{item}</li>);
                })}

                <li>
                    <input ref="nameInput" defaultValue=""/>
                    <button onClick={this.add.bind(this)}> add</button>
                </li>
            </ul>
        );
    }
}

module.exports = List;