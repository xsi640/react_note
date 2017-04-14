import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonItem extends Component {

    static propTypes = {
        person: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }).isRequired
    }

    render() {
        return (
            <tr>
                <td>{this.props.person.id}</td>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.age}</td>
                <td>
                    <button className="btn btn-default">修改</button>
                    <button className="btn btn-default">删除</button>
                </td>
            </tr>
        );
    }
}

export default PersonItem;