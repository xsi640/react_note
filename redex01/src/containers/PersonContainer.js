import React, {Component} from 'react'
import PersonList from '../components/PersonList'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class PersonContainer extends Component {
    static PropTypes = {
        persons: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }))
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-default">添加</button>
                <PersonList persons={this.props.persons}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.getPersons
    }
}

export default connect(
    mapStateToProps
)(PersonContainer);

