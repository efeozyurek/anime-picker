const button = document.querySelector(".get-anime")
const title = document.querySelector(".title")
const poster = document.querySelector(".poster")
const synopsis = document.querySelector(".synopsis")
const episode = document.querySelector(".episode")
const rating = document.querySelector(".rating")
const genre = document.querySelector(".genre")
const theme = document.querySelector(".theme")

button.addEventListener("click", () => {
    fetch("/anime")
        .then(res => res.json())
        .then(data => {
            title.textContent = data.title;
            poster.src = data.image;
            poster.alt = data.title;
            synopsis.textContent = data.synopsis || "No synopsis available.";
            episode.textContent = "Episode: " + data.episodes || "null";
            rating.textContent = "Rating: " + data.rating || "null";
            genre.textContent = "Genre: " + data.genres || "null";
            theme.textContent = "Theme: " + data.themes || "null";
        })

        .catch(err => {
            title.textContent = "Error fetching anime";
            poster.src = "";
            synopsis.textContent = "";
            episode.textContent = "";
            rating.textContent = "";
            genre.textContent = "";
            theme.textContent = "";
            console.error(err);
            });
})