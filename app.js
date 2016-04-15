var profile = require("./profile.js");
// var profile = require("./profile");
//profile.get('vandoan');

// look at the arguments
// console.dir(process.argv);
// process is a global object we can access things like the current verstion of node and arguments passed in as a command line

// var users = ['chalkers', 'joykesten2', 'vandoan'];

// add the name in the terminal after the js
// node app chalkers
var users = process.argv.slice(2);
users.forEach(function(username){
	profile.get(username);
});

// or
// users.forEach(profile.get); 