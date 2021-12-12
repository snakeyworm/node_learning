
// Node.js - Hello World!

const http = require( "http" )

const hostname = "127.0.0.1"
const port = 3000

function nextTickTest() {

    console.log( "Hello ")
    process.nextTick( () => {
        console.log( "!!!!!!" )
    } );
    console.log( "World" )

}

const server = http.createServer( ( req, res ) => {
    res.status = 200
    res.setHeader( "Content-Type", "text/html" )
    nextTickTest()
    res.end( "<h1>Hello World!</h1>" )
} )

server.listen( port, hostname, () => {
    console.log( `Server runing at http://${hostname}:${port}` )
} )
