let moviesFromLS = [];
let currentMovie = {};

function onPageLoad() {
    // ta emot parametern från vår url
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);
    // hämta filmerna från LS
    moviesFromLS = JSON.parse(localStorage.getItem('all_movies'));
    // spara undan filmen vi är på i den globala variabeln currentMovie
    currentMovie = moviesFromLS.find((element) => element.id === id);
    renderMovieToUI();
};
onPageLoad();

function renderMovieToUI() {
    // skriva ut bilden på sidan
    const movieImageEl = document.getElementById('movie-image');
    movieImageEl.setAttribute("src", currentMovie.image);
    movieImageEl.setAttribute("alt", `Movie poster of ${currentMovie.title}`);
    document.getElementById("header-title").innerText = currentMovie.title;
    document.getElementById("movie-rtRating").innerText = currentMovie.rt_score + "%";
    document.getElementById("movie-description").innerText = currentMovie.description;
    document.getElementById("seen").checked = currentMovie.seen;
};

// skapa eventlyssnare för när man togglar checkboxen för 'seen'
const seenCheckboxEl = document.getElementById("seen");
seenCheckboxEl.addEventListener("click", (e) => {
    handleSeenClicked(e);
});

function handleSeenClicked(e) {
    // ändra i vår currentMovie om användaren klickat att denne sett eller ej
    if (e) {
        currentMovie.seen = e.target.checked;
    }

    // uppdatera vårt filmobjekt i LS
    // hitta vilket index vår film är på i moviesFromLS-listan
    const index = moviesFromLS.findIndex((m) => m.id === currentMovie.id);
    // nu kan vi byta ut "gamla" filmobjektet till det nya
    moviesFromLS.splice(index, 1, currentMovie);
    localStorage.setItem("all_movies", JSON.stringify(moviesFromLS));

    // hantera sett-listan (seen_movies) i LS
    // kika om seen_movies ens finns
    const seenmoviesFromLS = JSON.parse(localStorage.getItem("seen_movies") || "[]");
    if (currentMovie.seen) {
        // nu vill vi lägga in filmen i seen_movies i LS
        seenmoviesFromLS.push(currentMovie);
        console.log(seenmoviesFromLS);
        // uppdaterar LS seen_movies
        localStorage.setItem("seen_movies", JSON.stringify(seenmoviesFromLS));
    } else {
        // hitta index för vart filmen ligger någonstans
        const index = seenmoviesFromLS.findIndex((m) => m.id === currentMovie.id);
        seenmoviesFromLS.splice(index, 1);
        console.log(seenmoviesFromLS);
        // uppdaterar LS seen_movies
        localStorage.setItem("seen_movies", JSON.stringify(seenmoviesFromLS));
    }
};

// ändra värde på vår rating
document.getElementById("movie-rating-select").addEventListener("change", (e) => {
    const rating = e.target.value;

    // uppdatera currentMovie med nya ratingen
    currentMovie.rating = rating;
    // har man ej klickat i att man sett filmen, men ratear, då sätter vi filmen till sedd
    if (!currentMovie.seen) {
        currentMovie.seen = true;
        // uppdatera elementet
        seenCheckboxEl.checked = true;
        handleSeenClicked();
    }

    const index = moviesFromLS.findIndex((m) => m.id === currentMovie.id);
    // uppdatera lokala listan med nya ratingen
    moviesFromLS.splice(index, 1, currentMovie);
    // uppdaterar LS all_movies
    localStorage.setItem("all_movies", JSON.stringify(moviesFromLS));
    // uppdatera UI med nya ratingen:
    document.getElementById("movie-rating").innerText = `${rating}/5`;
});
