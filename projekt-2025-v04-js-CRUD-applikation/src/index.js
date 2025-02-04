import API_KEY from "./api-key.js";
let endpoint = `https://api.rawg.io/api/games?page_size=24&key=${API_KEY}&page=1&ordering=-added`;
// ordering: name, released, added, created, updated, rating, metacritic

// fetches games from api and implements all the other functions
async function fetchGames() {
	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`HTTP error, status code: ${response.status}`);
		}
		const fetchedGames = await response.json();
		console.log(fetchedGames);
		displayGames(fetchedGames.results);

		return fetchedGames;
	} catch (error) {
		console.error("An error came up: ", error);
	}
}

// displays games on the game-list html object
function displayGames(games){
	const gamesList = document.getElementsByClassName("games-list")[0]
	games.forEach(game => generateGameDivSmall(game, gamesList))
}

// generates all html objects for the game
function generateGameDivSmall(game, gamesList){
	const gameDivSmall = document.createElement("div");
	gameDivSmall.className = "game-div--small";
	gamesList.appendChild(gameDivSmall);

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
