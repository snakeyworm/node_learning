
import fetch from "node-fetch"

function getUser( name ) {
    return fetch( "http://localhost:8080/users.json" )
        .then( res => res.json() )
        .then( res => fetch( `http://localhost:8080/users/${res[name]}.json` ) )
        .then( res => res.json() )
}

getUser( "caleb" )
    .then( res => console.log( res ) )
