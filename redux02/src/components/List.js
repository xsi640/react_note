import React,{Component} from 'react'
import {
    Panel,
    PanelGroup
} from 'react-bootstrap'


class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeKey:"1"
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        console.log(this.props.list);
        let list = this.props.list.map((item, index) => {
            return <Panel key={index} header={item.title} eventKey={index}>{item.content}</Panel>
        })

        return (
            <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                {list}
            </PanelGroup>);
    }
}

module.exports = List;