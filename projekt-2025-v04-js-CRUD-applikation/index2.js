const CLIENT_ID = '73fb13579aeb4f75b527367b8f08a921';
const API_URL = `https://api.rawg.io/api/games?key=${CLIENT_ID}`;
const stuff = '';

fetch(API_URL)
	.then(response => { 
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		console.log(response.json());
	})
	.catch(err => {
		console.error(err); 
	});

	