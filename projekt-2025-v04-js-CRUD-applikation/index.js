const CLIENT_ID = "pfa3u33d6uivovxjl3x9m6y19m4siw";
const CLIENT_SECRET = "nyp3jlhtqvs6ppfksvuxlzsiouo173";
const API_URL = 'https://api.igdb.com/v4/games';
let TOKEN = "";
async function fetchGames() {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) {
			throw new Error(`Error!!!: ${response.status}`);
		}
		const data = await response.json();
		displayImages(data.results);
	} catch (error) {
		console.error(error);
	}
}
// fetchGames();

// const fetch = require('node-fetch'); // Only needed for Node.js, not in browser environments.

const url = 'https://id.twitch.tv/oauth2/token';
const params = new URLSearchParams({
	client_id: CLIENT_ID,
	client_secret: CLIENT_SECRET,
	grant_type: 'client_credentials'
});
const url2 = `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`

fetch(url2, { 
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	// body: params.toString()
})
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => {
		// console.log('Access Token:', data.access_token);
		console.log('Data:', data);
		TOKEN = data.access_token;
		console.log('Access Token:', TOKEN);
	})
	.catch(error => {
		console.error('Error:', error);
	});




// fetch(API_URL, {
// 	method: 'POST',
// 	headers: {
// 		'Client-ID': CLIENT_ID,
// 		'Authorization': `Bearer ${TOKEN}`,
// 		// 'Body': 'fields *;',
// 		'Content-Type': 'application/json',
// 		'Body': 'query'
// 	},
// 	body: "fields involved_companies.*;"
// 	// body: params.toString() 
// })
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}
// 		//   return response.json();
// 	})
// 	.then(data => {
// 		console.log('Data:', data);
// 	})
// 	.catch(error => {
// 		console.error('Error:', error);
// 	});

	fetch(
		"https://api.igdb.com/v4/games",
		{ method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Client-ID': CLIENT_ID,
			'Authorization': `Bearer ${TOKEN}`
		  },
		  body: "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;"
	  })
		.then(response => {  
			console.log(response.json());
		})
		.catch(err => {
			console.error(err);
		});