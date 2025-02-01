import API_KEY from "./api-key.js";
let endpoint = `https://api.rawg.io/api/games?page_size=24&key=${API_KEY}&page=1&ordering=-added`;
let games = null;
// ordering: name, released, added, created, updated, rating, metacritic

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
	games.forEach(game => generateGameDivLong(game))
}

function generateGameDivLong(game){
	const gameDivLong = document.createElement("div");
	gameDivLong.className = "game-div--long";
	gamesList.appendChild(gameDivLong);

	const gameDivLongCheck = document.createElement("div");
	gameDivLongCheck.className = "game-div--long__check";
	gameDivLong.appendChild(gameDivLongCheck);

	const gameDivLongImage = document.createElement("img");
	gameDivLongImage.className = "game-div--long__image";
	gameDivLongImage.style.backgroundImage = `url(${game["short_screenshots"][0]["image"]})`;
	gameDivLong.appendChild(gameDivLongImage);

	const gameDivLongInfo = document.createElement("div");
	gameDivLongInfo.className = "game-div--long__info";
	gameDivLong.appendChild(gameDivLongInfo)

	const gameDivLongName = document.createElement("h2");
	gameDivLongName.className = "game-div--long__name";
	gameDivLongName.textContent = game["name"];
	gameDivLongInfo.appendChild(gameDivLongName);

	const gameDivLongDateRelease = document.createElement("h3");
	gameDivLongDateRelease.className = "game-div--long__date-release";
	gameDivLongDateRelease.textContent = game["platforms"][0]["released_at"];
	gameDivLongInfo.appendChild(gameDivLongDateRelease);
}

function buttonCheckEvent(games){
	const gameDivLongCheck = document.getElementsByClassName("game-div--long__check");
	
	Array.from(gameDivLongCheck).forEach(element => element.addEventListener("click", () => {
		element.classList.toggle("game-div--long__check--checked");
		console.log("clicked");
	}))
}
fetchGames()
	.then((value) => {games = value.results})
	.then(() => displayGames(games))
	.then(() => buttonCheckEvent(games));



