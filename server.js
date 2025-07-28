const express = require("express");
const axios = require("axios")
const path = require("path")

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.get("/anime", async (req, res) => {
    try {
        const response = await axios.get("https://api.jikan.moe/v4/random/anime");
        const anime = response.data.data;

        res.json({
            title: anime.title,
            image: anime.images.jpg.image_url,
            synopsis: anime.synopsis,
            episodes: anime.episodes,
            rating: anime.rating,
            genres: anime.genres.map(g => g.name),
            themes: anime.themes.map(t => t.name),
        });
    } catch (error) {
        console.error("Error fetching anime:", error.message);
        res.status(500).json({error: "failed to fetch anime data"});
    }

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});