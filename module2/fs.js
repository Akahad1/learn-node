const fs =require('fs')

const output=fs.readFileSync(__dirname + '/hello.txt',"utf-8")
const text= 'hello gurucor'
const output2 =fs.writeFileSync('./module2/writeText',text)
console.log(output)
