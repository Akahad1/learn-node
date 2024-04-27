const fs =require('fs')
// fs.readFile(__dirname + '/hello.txt' ,'utf-8',(error,data)=>{
//     if(error){
//         throw new Error (" Error");
//     }
//     console.log(data)
//     fs.writeFile(__dirname + '/writeText',"Hi CagolCor",(error)=>{
//         if(error){
//             throw new Error("error")
//         }
    
//     }) 
    

// })

const readAbleSterem =fs.createReadStream(__dirname + '/hello.txt','utf-8')
const writeAbleStrem =fs.createWriteStream(__dirname + '/writeText')

readAbleSterem.on("data",(data)=>{
    console.log(data)

   

    writeAbleStrem.write(data,(error)=>{
    if(error){
       throw new Error("eror")
    }
    })

    

})
writeAbleStrem.on('error',()=>{
    throw new Error ('error')
})
writeAbleStrem.on('finish',()=>{
    console.log("finish data")
})
