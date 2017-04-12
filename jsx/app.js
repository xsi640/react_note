'use strict'

// ReactDOM.render(<h1> title </h1>, document.getElementById('app'));

class Item extends React.Component {
    render() {
        return <li>
            one item.
        </li>;
    }
}

// ReactDOM.render(
//     <ul style={{backgroundColor:'red'}}>
//     <Item/>
//     <Item/>
//     <Item/>
//     </ul>
//     ,
//     document.getElementById('app')
// );

const b = false;
const result = [];
if(b){
    result.push(<Item/>)
    result.push(<Item/>)
    result.push(<Item/>)
}else{
    result.push(<h1>111</h1>)
    result.push(<h1>111</h1>)
    result.push(<h1>111</h1>)
}

ReactDOM.render(
    <ul style={{backgroundColor:'red'}}>
        {b?<Item/>:<h1>my name is h1</h1>}
    <Item/>
        {result}
    </ul>
    ,
    document.getElementById('app')
);

// ReactDOM.render(React.createElement('ul',
//     {style:{backgroundColor:'yellow'}}
// , [
//     React.createElement(Item),
//     React.createElement(Item),
//     React.createElement(Item)
// ]), document.getElementById('app'));

if(b){
    result.push(React.createElement(Item))
    result.push(React.createElement(Item))
    result.push(React.createElement(Item))
}else{
    result.push(React.createElement('h1', null, '111'))
    result.push(React.createElement('h1', null, '111'))
    result.push(React.createElement('h1', null, '111'))
}

ReactDOM.render(React.createElement('ul',
    {style:{backgroundColor:'yellow'}}
, [
    b ? React.createElement(Item) : React.createElement('h1',null,'my name is h1'),
    React.createElement(Item),
    result
]), document.getElementById('app'));