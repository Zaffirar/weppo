//Logi udostępnione przez Karola Cieślawskiego

const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

(async function processLineByLine() {
    try {
        const rl = createInterface({
            input: createReadStream('logi.txt'),
            crlfDelay: Infinity
        });

        var count = {}; rl.on('line', (line) => {
            var tmp = String(line).trim().split(" ")[1];
            if (tmp in count) {
                count[tmp]++;
            }
            else {
                count[tmp] = 1;
            }
        });

        await once(rl, 'close');
        function findMax(source){
            var maxIP, maxEntrances=0;
            for(IP in source){
                if(source[IP]>maxEntrances){
                    maxIP=IP;
                    maxEntrances=source[IP];
                }
            }
            return {maxIP, maxEntrances}
        }
        max = findMax(count);
        console.log(max.maxIP + " " + max.maxEntrances);
        delete count[max.maxIP];
        max = findMax(count);
        console.log(max.maxIP + " " + max.maxEntrances);
        delete count[max.maxIP];
        max = findMax(count);
        console.log(max.maxIP + " " + max.maxEntrances);
    } catch (err) {
        console.error(err);
    }
})();