module.exports = {dwa};
var jeden = require('./jeden')
function dwa(s){
    if(s.length>0){
        console.log(`dwa: ${s}`);
        jeden.jeden(s.substring(0, s.length-1));
    }
}