
const bucketLists = document.querySelector("#bucketLists");
const button = document.querySelector("button");
const form = document.getElementById("bucketForm");

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

	const bucketListContainer = document.getElementById(select.value);
	const bucketList = document.querySelector(`#${select.value} ul`);
	const bucketListItem = document.createElement("li");
	const v = document.createElement("span");
	const x = document.createElement("span");

	v.className = "checkbox checkbox--v";
	x.className = "checkbox checkbox--x";

	v.onclick = () => {
		v.classList.toggle('clicked');
	}

	x.onclick = () => {
		bucketList.removeChild(bucketListItem);
		if (bucketList.childElementCount <= 0) {
			bucketLists.removeChild(bucketListContainer);
		}
	}

	bucketListItem.textContent = input.value;
	bucketList.appendChild(bucketListItem);
	bucketListContainer.appendChild(bucketList);
	bucketListItem.appendChild(v);
	bucketListItem.appendChild(x);

	form.reset();
	console.log(input.value);
	return false; // samma sak som event.preventDefault();
}