// const gamesList = document.getElementsByClassName("games-list")[0];

function displayGames(games){
	console.log(games);
	const gamesList = document.getElementsByClassName("games-list")[0];
	games.forEach(game => {
		generateGameDivLong(game, gamesList);
	})
}

function generateGameDivLong(game, gamesList) {
	const gameDivLong = document.createElement("div");
	gameDivLong.className = "game-div--long";
	gameDivLong.id = game["id"];
	gamesList.appendChild(gameDivLong);

	const gameDivLongDelete = document.createElement("div");
	gameDivLongDelete.className = "game-div--long__delete";
	gameDivLongDelete.textContent = "-";
	gameDivLongDelete.id = game["id"];
	gameDivLong.appendChild(gameDivLongDelete);

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

function getGamesFromLocalStorage() {
	let games = [];
	for (let i = 0; i < localStorage.length; i++) {
		let gameObjKey = localStorage.key(i);
		gameObj = localStorage.getItem(gameObjKey);
		games[i] = JSON.parse(gameObj);
	}
	return games;
}

function deleteGameFromList(){
	const gameDivLongDelete = document.getElementsByClassName("game-div--long__delete");
	Array.from(gameDivLongDelete).forEach(element => element.addEventListener("click", () => {
		document.getElementById(element.id).remove();
		localStorage.removeItem(element.id);
		console.log(element.id)
	}))
}

const games = getGamesFromLocalStorage();
displayGames(games);
deleteGameFromList();