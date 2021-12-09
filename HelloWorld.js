
// Node.js - Hello World!

const http = require( "http" )
const args = require( "minimist" )( process.argv.slice( 2 ) )

const hostname = "127.0.0.1"
const port = 3000
process.exitCode = 1

const server = http.createServer( ( req, res ) => { 
    res.statusCode = 200
    res.setHeader( "Content-Type", "text/plain" )
    res.end( "Hello World!" )
} )

server.listen( port, hostname, () => {
    console.log( `Server runing at http://${hostname}:${port}` )
} )


