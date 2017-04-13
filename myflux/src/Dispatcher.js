const storeCallbackList = [];
const middlewareList = [];

module.exports = {

    use(middleware){
        middlewareList.push(middleware);
        return this;
    },

    register(storeCallback){
        storeCallbackList.push(storeCallback);
    },

    dispatcher(action){

        let index = -1;
        let that = this;

        function next() {
            let middle = middlewareList[++index];
            if(middle){
                middle(action, next);
            }else{
                that._dispatch(action);
            }
        }

        next();
    },

    _dispatch(action){
        for (let callback of storeCallbackList) {
            callback(action);
        }
    }
};