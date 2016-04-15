

// Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out 
var http = require("https");
//var username = "vandoan";

function printError(error){
	console.error(error.message);
}

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
}

// printMessage("Doan",100,222);

function get(username){
	//Connect to the API URL (http://teamtreehouse.com/username.json)
	//var request = http.get("teamtreehouse.com/"+username+".json", function(response){
	var request = http.get("https://teamtreehouse.com/"+username+".json", function(response){
		//console.dir(res);
		//console.log(response.statusCode);
		//Read the data
		var body = "";
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function(){
			if(response.statusCode === 200){
				try {
				//Parse the data 
				//Print the data
				//console.log(body);
				var profile = JSON.parse(body);
				//console.dir(profile);
				printMessage(username, profile.badges.length, profile.points.JavaScript);
			// console.log(typeof body);
				} catch(error){
					// Connection Error
					// parse error
					printError(error);
				}
			} else {
				// status code error
				printError({message: "There was an error getting the username " + username + ". (" +
					response.statusMessage + ")"});
			}
		})
	});

	request.on("error", printError);
}

module.exports.get = get;


