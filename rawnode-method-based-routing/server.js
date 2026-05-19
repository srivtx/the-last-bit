// Handcoded — everything in this repo is written by hand except README.md.

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
    let method = req.method ; 
    console.log(`[${method}] ${pathname}`)


    if (pathname === "/" ) {
        if (method !== "GET"){
            sendjson(res , 405 , {
                "msg" : "route doesn't exist"
            })
            return ; 
        }


            sendjson(res , 200 , {
                "msg" : "welcome"
            })
        
        return ; 
    }



    if (pathname === "/home" ) {
        if(method !== "GET"){
            sendjson(res , 405 , {
                "msg" : "route doesn't exist"
            })
            return ; 
        }

        sendjson(res, 200 , { 
            "msg" : " welcome to the home page", 
            "path" : "/home"
        }) ; 

        return ; 
    }



    if (pathname === "/about" ) {
        if (method !== "GET"){
            sendjson(res , 405 , {
                 "msg" : "route doesn't exist"
            })
            return ; 
        }

        sendjson(res , 200 , {
            "msg" : " this is the about page", 
            "path" : "/about"
        })
        return ; 
    } 




    if ( method === "GET"){
        sendjson(res , 404 , {
            "msg" : "404 not found" , 
            "path" : `${req.url}`
        })
        return ; 
    }else {
        sendjson(res, 404 , { 
            "msg" : "doesn't exist"
        })
        return ; 
    } 


})




server.listen(8000)

