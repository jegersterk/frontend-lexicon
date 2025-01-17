
const bucketLists = document.querySelector("#bucketLists");
const button = document.querySelector("button");
const form = document.getElementById("bucketForm");
// button.addEventListener("click", () => {
// 	// event.preventDefault();
// 	const select = document.getElementById("activityCategory");
// 	const input = document.getElementById("activityName");

// 	if (!document.getElementById(select.value)) {
// 		const bucketListDiv = document.createElement("div");
// 		bucketLists.appendChild(bucketListDiv);
// 		bucketListDiv.textContent = select.value;
// 		bucketListDiv.appendChild(document.createElement("ul"));
// 		bucketListDiv.id = select.value;
// 	}
// 	const bucketList = document.querySelector(`#${select.value} ul`);
// 	const bucketListItem = document.createElement("li");
// 	bucketListItem.textContent = input.value;
// 	// console.log(!document.querySelector(`#${select.value}`));
// 	bucketList.appendChild(bucketListItem);

// 	console.log(`bucketList children: ${bucketList.childElementCount}`);
// 	console.log(select.value);
// 	console.log(input.value);
// })
form.onsubmit = (event) => {
	// event.preventDefault();
	const select = document.getElementById("activityCategory");
	const input = document.getElementById("activityName");
	if (!document.getElementById(select.value)) {
		const bucketListContainer = document.createElement("div");
		const bucketList = document.createElement("ul");
		bucketListContainer.className = "container";
		bucketListContainer.id = select.value;
		bucketListContainer.textContent = select.value;
		bucketLists.appendChild(bucketListContainer);
		bucketListContainer.appendChild(bucketList);
	}
	const bucketListContainer = document.getElementById(select.value)
	const bucketList = document.querySelector(`#${select.value} ul`);
	const bucketListItem = document.createElement("li");
	bucketListItem.textContent = input.value;
	bucketList.appendChild(bucketListItem);
	bucketListContainer.appendChild(bucketList);
	console.log(input.value);
	form.reset();
	return false;
}