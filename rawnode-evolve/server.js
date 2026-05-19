 // first of all whats a node http server 

// it sends us request and we do respond right  ? 


const http = require("http");

const server = http.createServer();


function sendjson(res , statuscode , data ){
    res.writeHead(statuscode,  {
        "Content-type" : "application/json"  
    })

    res.end(JSON.stringify(data))
}





server.on("request", (req, res) => {
    let pathname = new URL(req.url, `http://${req.headers.host}`).pathname;


    if (pathname === "/") {
        sendjson(res , 200 , {
            "msg" : "welcome"
        })
        return ; 
    }



    if (pathname === "/home") {
        sendjson(res, 200 , { 
            "msg" : " welcome to the home page", 
            "path" : "/home"
        }) ; 

        return ; 
    }



    if (pathname === "/about") {
        sendjson(res , 200 , {
            "msg" : " this is the about page", 
            "path" : "/about"
        })
        return ; 
    }


    sendjson(res , 404 , {
        "msg" : "404 not found" , 
        "path" : `${req.url}`
    })


})




server.listen(8000)

