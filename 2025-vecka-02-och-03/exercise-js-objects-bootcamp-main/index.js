// Bibblan
const books = [
	{
		"title": "the thing",
		"author": "john johnson",
		"numPages": "356"
	},
	{
		"title": "stuff",
		"author": "magnus doe",
		"numPages": "302"
	},
	{
		"title": "my story",
		"author": "kevin anderson",
		"numPages": "276"
	}
]
function searchTitle(books, title) {
	for (let i = 0; i < books.length; i++) {
		if (title === books[i]["title"])
			return books[i]["title"];
	}
	return null;
}
const title = "my story";
let a = searchTitle(books, title);
// console.log(a); // answer


// Letter Frequency
function letterFrequency(str) {
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]])
			obj[str[i]] = 0;
		obj[str[i]] += 1;
	}
	console.log(obj);
}
const str = "kalle";
// letterFrequency(str); // answer




// User Register
function filterByCountry(countryCode) {
	list = [];
	for (const i of users) {
		if (countryCode === i["nat"]) {
			list.push(i);
		}
	}
	return list;
}
let listByCountry = filterByCountry("FR");
// console.log(listByCountry); //answer

function listEmails() {
	list = [];
	for (const i in users) {
		list.push(users[i]["email"])
	}
	return list;
}
// console.log(listEmails()); //answer



function userEmailReformat(ID) {
	const list = listEmails();
	newUserEmail = list[ID].substring(list[ID].indexOf(".") + 1, list[ID].indexOf("@"))
		+ "."
		+ list[ID].substring(0, list[ID].indexOf("."))
		+ "@evilcorp"
		+ "."
		+ users[ID]["nat"].toLowerCase();
	return newUserEmail;
}
userEmailReformat(0);

function reformattedEmailsList(){
	const list = listEmails(); 
	emailList = [];
	for(const i in list){
		emailList.push(userEmailReformat(i));
	}
	return emailList;
}
reformattedEmailsList();
// console.log(emailList); //answer