const EventEmitter = require('events').EventEmitter;
const Dispathcher = require('./Dispatcher');

class Store extends EventEmitter{
    constructor(){
        super();
        Dispathcher.register((action)=>{
            switch (action.actionType){
                case 'add':
                    this._add(action.name);
                    break;
                case 'getAll':
                    this._getAll(action.list);
                    break;
            }
        });
        this._list = [];
    }

    _add(item){
        this._list.push(item);

        this.emit('change', this.list);
    }

    _getAll(list){
        this._list = list;
        this.emit('change', this.list);
    }

    get list(){
        return this._list;
    }
}

module.exports = Store;