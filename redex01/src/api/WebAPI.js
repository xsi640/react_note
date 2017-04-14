import _database from './database.json'

//const TIMEOUT = 100

export default {
    // getPersons: (cb, timeout) => {
    //     setTimeout(() => {
    //         cb(_database);
    //     }, timeout || TIMEOUT);
    // },
    getAllPerson : _database
}