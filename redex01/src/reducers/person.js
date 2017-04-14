import {RECEIVE_PERSONS} from '../actions/ActionTypes'
import WebAPI from '../api/WebAPI'

const getPersons = (state, action) => {

    if (typeof state === "undefined") {
        action.type = RECEIVE_PERSONS;
    }

    switch (action.type) {
        case RECEIVE_PERSONS:
            return WebAPI.getAllPerson;
        default:
            return state;
    }
}

export default getPersons;