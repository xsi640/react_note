'use strict'

class Children extends React.Component {
    render() {
        return <li>{this.props.name}</li>
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.list.map(item => {
                    return <Children name={item}/>
                })}
            </ul>
        );
    }
}

const list = [
    'AAA',
    'BBB',
    'CCC'
];

ReactDOM.render(<App list={list}/>, document.getElementById('app'))