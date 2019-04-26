const fs = require('fs') // file system

fs.readFile(__dirname + '/test.md', 'utf8',  (socks, jik) => {
    console.log(socks)
    console.log(jik)
})