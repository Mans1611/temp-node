const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome here')
    }else if (req.url ==='/about'){
        res.end('<h1>Welcome to about</h1>')
    }
    else{
        res.end(`<h1>OPssss!!!</h1>
            <a href = '/'> Go home </a>
        `);
    }

})
server.listen(8080)