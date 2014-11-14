
// ------------------------------------------
// Early example of getting API data from League API
// This function's methodString will need to be modified in the function call
// 		for a variety of different API calls/libraries
// 		https://developer.riotgames.com/api/methods#!/856
// 			Reference of full Riot API list


var apiCall = function(methodString, cb) {
	
	$.get('https://na.api.pvp.net/api/lol/' + methodString + '?api_key=61ff1874-f661-4eff-9426-9bae6d7889bd', function (data){
		// console.log(data);
		cb(data);
	})

	
}






$(document).on('ready', function() {
  

apiCall('na/v2.2/match/1550544142/', function(data){
		console.log(data);


}

});