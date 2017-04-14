import React, {Component} from 'react'
import PersonItem from './PersonItem'
import PropTypes from 'prop-types';

class PersonList extends Component {

    static PropTypes = {
        persons: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }))
    }

    render() {
        let row = [];
        for (let p of this.props.persons) {
            row.push(<PersonItem key={p.id} person={p}/>);
        }

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
        );
    }
}

export default PersonList;