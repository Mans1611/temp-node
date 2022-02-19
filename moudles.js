const os = require('os');
console.log(os.userInfo())

console.log(`The time is ${os.uptime()/3600}`);

const currentOS = {
    name:os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOS);

const path = require('path');

console.log(path.sep);
const base = path.join("/main", 'subfolder', 'textfile');
console.log(base);
console.log(path.basename(base));
const abs = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(abs);

