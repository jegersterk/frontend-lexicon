const API_URL = "https://ghibliapi.vercel.app/films/";

const fetchMovies = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error, status code: ${response.status}`);
        }
        const movies = await response.json();
        addLikedKeyToMovie(movies);
    } catch (error) {
        console.error("An error came up: ", error);
    }
};

const addLikedKeyToMovie = (movies) => {
    movies.map((movie) => movie.liked = false);
    localStorage.setItem("movies", JSON.stringify(movies));
    renderMoviesToUI();
};

const renderMoviesToUI = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    const moviesContainerEl = document.getElementById("movies-container");
    // lägga in filmerna som element i vårt UI
    movies.forEach(movie => {
        // skapa själva elementet för article för filmen
        const movieEl = document.createElement("article");
        movieEl.setAttribute("class", "movie-container");
        movieEl.innerHTML = `
                            <figure 
                                style="background-image: url(${movie.image})"
                                role="img"
                                aria-label="Movie poster for ${movie.title}"
                            >
                                <figcaption class="sr-only">
                                    Movie poster for ${movie.title}
                                </figcaption>
                                <label for="${movie.id}" class="sr-only">Like ${movie.title}</label>
                                <input class="like-checkbox" id="${movie.id}" type="checkbox" ${movie.liked ? "checked" : ""}>
                            </figure>
                            <h4 class="movie-container__title">${movie.title}</h4>
                            <p class="movie-container__releaseDate">${movie.release_date}</p>
                            `;
        moviesContainerEl.appendChild(movieEl);
    });
    // lägga på eventlyssnare på våra checkboxar
    const likeCheckboxes = document.querySelectorAll(".like-checkbox");
    likeCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            // uppdatera i LS
            const moviesFromLS = JSON.parse(localStorage.getItem("movies"));
            const id = event.target.id;
            const movie = movies.find(m => m.id === id);
            if (movie) {
                movie.liked = !movie.liked;
                // hitta index på objektet i listan via id
                const index = moviesFromLS.findIndex(m => m.id === id);
                // splice från gamla listan för att få in det uppdaterade objektet
                moviesFromLS.splice(index, 1, movie);
                // uppdatera listan i själva local storage
                localStorage.setItem("movies", JSON.stringify(moviesFromLS));
            } else {
                console.log(`Movie with id ${id} not found`);
            }
        });
    });
    
};

const initApp = () => {
    if (localStorage.getItem("movies")) {
        renderMoviesToUI();
    } else {
        fetchMovies();
    }
};

initApp();