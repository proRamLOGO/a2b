var DB = new Object() ;

const fs = require('fs')  ;
fs.readFile('db.txt', 'utf-8', (err, data) => { 
    if (err) throw err;  
    console.log(data) ;
    DB = JSON.parse(data);
})

function newUser( username, firstName, secondName, emailID, password ) {
    console.log("Hello") ;
    alert(username) ;
    if ( DB[username]!=undefined ) {
        alert("Username already taken!") ;
        return undefined;
    }

}
