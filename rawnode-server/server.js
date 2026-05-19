// Raw Node.js — no frameworks. Everything in this repo is raw except README.md.

// first of all whats a node http server 

// it sends us request and we do respond right  ? 


const http = require("http");

const server = http.createServer();


server.on("request", (req, res) => {
    let pathname = new URL(req.url, `http://${req.headers.host}`).pathname;


    if (pathname === "/") {
        res.writeHead(
            200, {
            'Content-type': "application/json"
        }
        )
        res.end(JSON.stringify({
            data: "hello world"
        }))
        return ; 
    }



    if (pathname === "/home") {
        res.writeHead(200, {
            "Content-type": "application/json"
        })
        res.end(JSON.stringify({
            msg: "welcome to home page right"
        }))

        return ; 
    }



    if (pathname === "/about") {
        res.writeHead(200, {
            "Content-type": "application/json"
        })

        res.end(JSON.stringify({
            msg: "welcome to about page right"
        })) ; 
        return ; 
    }


    res.writeHead(404, {
        "Content-type": "application/json"
    })

    res.end(JSON.stringify({
        msg: "404 page not found"
    }))


})



server.listen(8000)

