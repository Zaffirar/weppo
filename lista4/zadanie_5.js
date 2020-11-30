var fs = require('fs');
(async function() {
 var result = await fs.promises.readFile('a.txt', 'utf-8');
 console.log( result );
})();
