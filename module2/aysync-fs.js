
const fs =require('fs')
fs.readFile(__dirname + '/hello.txt' ,'utf-8',(error,data)=>{
    if(error){
        throw new Error (" Error");
    }
    console.log(data)

})

fs.writeFile(__dirname + '/writeText',"Hi CagolCor",(error)=>{
    if(error){
        throw new Error("error")
    }

}) 

