import API_KEY from "./api-key.js";
let endpoint = `https://api.rawg.io/api/games?page_size=24&key=${API_KEY}&page=1&ordering=-added`;
let games = null;

const gamesList = document.getElementsByClassName("games-list")[0]

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
}

function displayGames(games){
	games.forEach(game => generateGameDivSmall(game))
}

function generateGameDivSmall(game){
	console.log(game["name"])

	const gameDivSmall = document.createElement("div");
	gameDivSmall.className = "game-div--small";
	gamesList.appendChild(gameDivSmall);

	// const gameDivSmallImage = document.createElement("img");
	// gameDivSmallImage.className = "game-div--small__image";
	// gameDivSmallImage.setAttribute("src",`${game["short_screenshots"][0]["image"]}`);
	// gameDivSmall.appendChild(gameDivSmallImage);

	const gameDivSmallImage = document.createElement("img");
	gameDivSmallImage.className = "game-div--small__image";
	gameDivSmallImage.style.backgroundImage = `url(${game["short_screenshots"][0]["image"]})`;
	gameDivSmall.appendChild(gameDivSmallImage);

	const gameDivSmallName = document.createElement("h2");
	gameDivSmallName.className = "game-div--small__name";
	gameDivSmallName.textContent = game["name"];
	gameDivSmall.appendChild(gameDivSmallName);
}

fetchGames()
	.then((value) => {games = value.results})
	.then(() => console.log('games result: ', games))
	.then(() => displayGames(games));
