
import fetch from "node-fetch"

function getUser( name ) {
    return fetch( "http://localhost:8080/users.json" )
        .then( res => res.json() )
        .then( res => fetch( `http://localhost:8080/users/${res[name]}.json` ) )
        .then( res => res.json() )
}

// getUser( "caleb" )
//     .then( res => console.log( res ) )


async function getUserA( name ) {

    let userList = await fetch( "http://localhost:8080/users.json" )
    let userListJSON = await userList.json()
    let user = await fetch( `http://localhost:8080/users/${userListJSON[name]}.json` )
    let userJSON = await user.json()

    return userJSON

}

getUserA( "caleb" )
    .then( res =>  console.log( res ) )
