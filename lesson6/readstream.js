const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    // console.log(url)
    if (url === '/') {
        res.write('<html><head><title>Form</title></head>')
        res.write('<body><form method="post" action="/process"> <input name="message"></input></form></body>')
        res.end("Hellow From home sides")
    } else if (url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            console.log('stream finished');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody)
            res.write('thank tou for submitting')
            res.end();
        })

    }
    else {
        res.write('not found');
        res.end();
    }

});


server.listen(8000)
console.log('listening port no 8000')