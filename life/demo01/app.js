'use strict'

class App extends React.Component {

    static get defaultProps() {
        //获得内置props
        console.log('get default props');
        return {
            word: 'hello'
        };
    }

    constructor(props) {
        //构造函数
        console.log('constructor');
        super(props);
        this.state = {
            name: 'eric'
        };
    }

    componentWillMount(){
        //组件挂载之前，实例化的组件，第一次渲染或加载之前执行
        console.log('componentWillMount');
    }

    componentDidMount(){
        //组件挂载之后，实例化组件，第一次渲染或加载之后执行
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        //组件接收到一个新的props时执行
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        //在组件接收到新的props或者state时被执行。在初始化时或者使用forceUpdate时不被执行。
        //返回false时，组件将不会被Update
        //默认返回true
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
        //组件更新之前执行，组件初始化后的每次渲染或加载之前执行。
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        //组件更新之后执行，组件初始化后的每次渲染或加载之后执行
    }

    render() {
        //渲染界面
        console.log('render');
        return (
            <h1>{this.props.word + ' ' + this.state.name}</h1>
        );
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        //组件被释放时执行
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));