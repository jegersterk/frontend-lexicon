console.log("koden är länkad");
const BASE_URL = "https://ghibliapi.vercel.app/films/";

// få data från API:et
async function fetchMovies() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();

        // ändra i varje filmobjekt, så den får review och rating
        // loopa över listan
        data.forEach(movie => {
            movie.seen = false;
            movie.rating = 0;
            movie.review = "";
        });
        // spara svaret från API till LS
        localStorage.setItem("all_movies", JSON.stringify(data));
    }
    catch (error) {
        console.error(error);
    }
};

function checkMovies() {
    // kolla om det redan finns filmer i LS
    const all_movies = JSON.parse(localStorage.getItem("all_movies"));
    if (all_movies) {
        // i så fall: rendera från LS
        renderMoviesToUI(all_movies);
    } else {
        // annars hämta data från API
        fetchMovies();
        const updated_all_movies = JSON.parse(localStorage.getItem("all_movies"));
        renderMoviesToUI(updated_all_movies);
    }
};
checkMovies();

// rendera från LS till mitt UI
function renderMoviesToUI(movies) {
    console.log(movies);
    const moviesContainerEl = document.getElementById('movies-container');
    movies.forEach((movie) => {
        const movieContainerEl = document.createElement('article');
        // på min artikel vill jag ha en eventlyssnare
        movieContainerEl.addEventListener("click", () => {
            console.log(movie);
            // den skall slussa mig till en ny sida
            window.location.href = `/movieView.html?id=${encodeURIComponent(movie.id)}`;
        });
        // skapa element för bilden
        const movieImgEl = document.createElement('figure');
        movieImgEl.style.backgroundImage = `url(${movie.image})`;
        const rtScoreEl = document.createElement('p');
        rtScoreEl.innerHTML = `<span class="rt-score">${movie.rt_score}%</span>`;
        movieImgEl.appendChild(rtScoreEl);
        // lägg till figure på movieContainerEl
        movieContainerEl.appendChild(movieImgEl);
        // lägg till titel och release date på filmkortet
        const movieTitleEl = document.createElement('h3');
        movieTitleEl.innerText = movie.title;
        movieContainerEl.appendChild(movieTitleEl);
        const releaseDateEl = document.createElement('p');
        releaseDateEl.innerHTML = movie.release_date;
        movieContainerEl.appendChild(releaseDateEl);

        // till sist lägger vi till nya elementet i vår HTML
        moviesContainerEl.appendChild(movieContainerEl);
    });
};