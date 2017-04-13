const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');

class Actions {

    add(name) {

        let action = {
            actionType: 'add',
            name: name
        }

        Dispatcher.dispatcher(action);
    }

    getAll() {

        WebAPI.getAll((data) => {
            let action = {
                actionType: 'getAll',
                list: data
            };
            Dispatcher.dispatcher(action);
        });
    }
}

module.exports = Actions;