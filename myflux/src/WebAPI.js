module.exports = {
    getAll(callback){
        setTimeout(() => {
            callback(['aaa', 'bbb', 'ccc']);
        }, 2000);
    }
}