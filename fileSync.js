console.log("start");
const { readFileSync,writeFileSync } = require("fs")
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
// readFileSync(path,'utf-8')
const test = readFileSync('./content/subfolder/test.txt','ascii');

// writeFileSync(path,content,{flag : 'a'})


writeFileSync('./content/result.txt',`\n here is the result \n${first} ,\n ${second}`,{
    flag : 'a' // a value to not overwrite the orignal value
})
writeFileSync('./mans.js','const mans = `mans`');

console.log("end");