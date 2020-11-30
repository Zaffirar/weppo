module.exports = {jeden};
var dwa = require('./dwa')
function jeden(s){
    if(s.length>0){
        console.log(`jeden: ${s}`);
        dwa.dwa(s.substring(0, s.length-1));
    }
}