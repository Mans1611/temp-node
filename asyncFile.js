const { rejects } = require('assert');
const {readFile,writeFile} = require('fs');
const { resolve } = require('path');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return null ;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        writeFile('./content/result.txt', `the result is ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            console.log("done with this task");
        });
    })
})

// const getData = ()=>{
//     return new Promise((resolve,reject)=>{
//       readFile("./content/first.txt",'utf-8',(err,result)=>{
//           if(err){
//               reject(err);
//           }else{
//               resolve(result);
//               const first = result;
//           }
//       })  
//     })
// }

// getData().then((res)=>{
//     readFile('./content/second.txt','utf-8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return ;
//         } 
//         console.log(res);
//         const second = res;
//         return result;
        
//     })
// }).then((res)=>{
//     writeFile('./content/result',`the file name ${first}    the second ${second}`,(err,result))
//     if(err){
//         console.log(err);
//         return ;
//     }
    
// }).catch((err)=>{
//     console.log(err);
// })
