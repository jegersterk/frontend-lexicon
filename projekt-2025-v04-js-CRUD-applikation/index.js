import API_KEY from "./api-key.js";
console.log(API_KEY)
let endpoint = `https://api.rawg.io/api/games?page_size=24&key=${API_KEY}&page=1&ordering=-rating`;
let games = null;

async function fetchGames() {
	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`HTTP error, status code: ${response.status}`);
		}
		const fetchedGames = await response.json();
		console.log(fetchedGames);
		return fetchedGames;
	} catch (error) {
		console.error("An error came up: ", error);
	}
};
function displayGames(games){
	games.forEach((game) => console.log(game["name"]))
}
fetchGames()
	.then((value) => {games = value.results})
	.then(() => console.log('is this undefined: ', games))
	.then(() => displayGames(games));

function as(result) {
	result.array.forEach(element => {
		console.log(element)
	});
}

console.log('array of games: ', games);