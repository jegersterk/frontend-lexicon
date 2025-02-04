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
		displayGames(fetchedGames.results);
		checkButton(fetchedGames.results);
		addToMyList(fetchedGames.results);
		
		console.log(fetchedGames);
		return fetchedGames;
	} catch (error) {
		console.error(error);
	}
}

// displays games on the game-list html object
function displayGames(games){
	const gamesList = document.getElementsByClassName("games-list")[0];
	games.forEach(game => generateGameDivLong(game, gamesList))
}

// generates all html objects for the game
function generateGameDivLong(game, gamesList){
	const gameDivLong = document.createElement("div");
	gameDivLong.className = "game-div--long";
	gamesList.appendChild(gameDivLong);

	const gameDivLongCheck = document.createElement("div");
	gameDivLongCheck.className = "game-div--long__check";
	gameDivLongCheck.textContent = "+";
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

// gives all check buttons for each individual game the function that give value "selected".
// selected buttons turns green on click
function checkButton(games){
	const gameDivLongCheck = document.getElementsByClassName("game-div--long__check");
	games.forEach((game,index) => {
		gameDivLongCheck[index].id = game["id"];
	})
	Array.from(gameDivLongCheck).forEach(element => element.addEventListener("click", () => {
		const gameObj = games.find(obj => obj["id"] == element.id);
		const key = "selected";
		gameObj[key] = !gameObj[key];
		if(gameObj[key]){
			element.classList.add("game-div--long__check--checked");
		}else{
			element.classList.remove("game-div--long__check--checked");
		}
	}))
}

// button that adds all selected games to local storage
function addToMyList(games){
	const button = document.createElement("button");
	button.textContent = "Click to add all marked to your list";
	button.className = "ui-aside__button--add-to-list";
	document.getElementsByClassName("ui-aside")[0].appendChild(button);

	// const button = document.getElementsByClassName("ui-aside__button--add-to-list")[0];
	button.addEventListener("click", () => {
		const selectedGames = games.filter(game => {if(game["selected"]){return game;}});
		selectedGames.forEach(game => localStorage.setItem(game["id"],JSON.stringify(game)));
		console.log(selectedGames);
	});
}

fetchGames()



