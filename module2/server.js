const http=require('node:http')
const server =http.createServer((req,res)=>{
    const parseUrl=new URL(req.url,`http://${req.headers.host}`) 
    const pathName=parseUrl.pathname
     
    const posts =[
        { id:1,
        post :"tu comina",
        username: "Sahad"},
        { id:2,
        post :"tu comina",
        username: "Sahad"},
        { id:3,
        post :"tu comina",
        username: "Sahad"},

    ]
       
    

    if(req.url=== '/home' && req.method === "GET"){
        res.end('THIS IS HOME ROUTE')
    } else   if(pathName=== '/post' && req.method === "GET") {
        res.writeHead(200,{
            "Content-type" : "application/json"

        })
        const qurey =parseUrl.searchParams
        console.log(qurey.get("id"))
        const postId =qurey.get("id")
    const expectPost =posts.find(post=>post.id == postId)
     res.end(JSON.stringify(expectPost))

    }else{
        res.end("no data found")
    }
    

})



server.listen(5000,"127.0.0.1", ()=>{
    console.log("Server is runnig")
})