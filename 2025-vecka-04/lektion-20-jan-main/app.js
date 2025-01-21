const API_URL = "https://majazocom.github.io/Data/books.json";

fetch(API_URL) // fetch körs direkt
.then( // den här koden körs när servern svarar
    (res) => res.json() // ett promise, gör om svaret till ett objekt
) 
.then((books) => // data till objekt
    console.log(books)
)
.catch(
    (error) => console.error(error) // det här körs om något blir fel
)

// kod efteråt kommer att köras direkt efter fetch och innan servern hinner svara
console.log("Hej från koden");

// vi testar async await

const fetchBooks = async () => { // vi deklarerar funktionen fetchBooks som asynkron, för att kunna använda oss av await sen
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP-fel! Statuskod ${response.status}`);
        }
        const books = await response.json();
        console.log(books);
        // jag vill spara books till LS
        localStorage.setItem("books", JSON.stringify(books));
    } catch (error) {
        console.error('Felet är:', error);
    }
}

fetchBooks();

localStorage.setItem("name", "Maja");
localStorage.setItem("date", "20 januari");

// koppla knappen till funktionen här
const bookBtnEl = document.getElementById('check-books');
bookBtnEl.addEventListener("click", () => {
    // kolla om det finns böcker i local storage
    const booksFromLS = localStorage.getItem("books");

    console.log(JSON.parse(booksFromLS));
});

const clearBooksBtnEl = document.getElementById('clear-books');
clearBooksBtnEl.addEventListener("click", () => {
    localStorage.removeItem("books");
    localStorage.clear();
    let a = localStorage.key(3);
    console.log(a);
})