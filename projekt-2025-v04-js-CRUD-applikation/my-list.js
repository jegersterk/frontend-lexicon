

function displayGames(games){
	games.forEach(game => generateGameDivLong(game))
}

function generateGameDivLong(game) {
	const gamesList = document.getElementsByClassName("games-list")[0];

	const gameDivLong = document.createElement("div");
	gameDivLong.className = "game-div--long";
	gamesList.appendChild(gameDivLong);

	const gameDivLongDelete = document.createElement("div");
	gameDivLongDelete.className = "game-div--long__delete";
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
		console.log(localStorage.key(i));
		let gameObjKey = localStorage.key(i);
		gameObj = localStorage.getItem(gameObjKey);
		games[i] = JSON.parse(gameObj);
	}
	return games;
}

// unfinished
function deleteGame(){
	const gameDivLongDelete = document.getElementsByClassName("game-div--long__delete");
	// games.forEach((game,index) => {
	// 	gameDivLongDelete[index].id = game["id"];
	// })
	Array.from(gameDivLongDelete).forEach(element => element.addEventListener("click", () => {
		console.log(games.find(obj => obj["id"] == element.id).name);
		const gameObj = games.find(obj => obj["id"] == element.id);
		const key = "selected";
		gameObj[key] = !gameObj[key];
		if(gameObj[key]){
			element.classList.add("game-div--long__check--checked");
		}else{
			element.classList.remove("game-div--long__check--checked");
		}
		console.log(games);
	}))
}

const games = getGamesFromLocalStorage();
displayGames(games);