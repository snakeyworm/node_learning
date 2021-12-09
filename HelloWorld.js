
// Node.js - Hello World!

const http = require( "http" )

const hostname = "127.0.0.1"
const port = 3000

const readline = require( "readline" ).createInterface( {
    input: process.stdin,
    output: process.stdout,
} )


const server = http.createServer( ( req, res ) => {
    res.status = 200
    res.setHeader( "Content-Type", "text/plain" )
    readline.question( "Do you wan't to play game? ", answer => {
        let joshuaAnswer
        switch ( answer[0] ) {
            case "y":
                joshuaAnswer = "How about Global Thermal Nuclear War?"
                break
            case "n":
                joshuaAnswer = "Okay bye"
                break
        }
        readline.close()
        res.end( joshuaAnswer )
    } )
} )

server.listen( port, hostname, () => {
    console.log( `Server runing at http://${hostname}:${port}` )
} )
