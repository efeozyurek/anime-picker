# Random Anime Picker

This is a simple web application built with Node.js and Express that fetches a random anime using the [Jikan API](https://docs.api.jikan.moe/) and displays its information on the screen.

---

## Features

- Fetches a completely random anime with one button click.
- Displays anime title, poster image, synopsis, episodes, rating etc.
- Frontend made with vanilla HTML, CSS, and JS.
- Backend made with Express.js and Axios to call the external API.

---

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/efeozyurek/anime-picker.git
   cd anime-picker
   ```

---

2. Install dependencies:

    ```bash
    npm install
    ```

---

3. Start server:

    ```bash
    node server.js
    ```

---

4. Open your browser and go to:

    ```bash
    http://localhost:3000
    ```

---

<h2>Project Structure</h2>

    
    anime-picker/
    │
    ├── public/           
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    │
    ├── server.js         
    ├── package.json
    └── .gitignore
    
---

<h3>API Used: https://docs.api.jikan.moe/</h3>