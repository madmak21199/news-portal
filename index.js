const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();

const api_key = process.env.NEWS_API_KEY;

app.use(express.static('public'));
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`port ${port}`));

app.get('/', async (request, response) => {
    response.sendFile("/public/index.html");
});

app.get('/news', async (request, response) => {
    const api_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f98b3a2103f941ad935a5c889490ff87`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

app.get('/sportsNews', async (request, response) => {
    const api_url = `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=f98b3a2103f941ad935a5c889490ff87`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});


app.get('/scienceNews', async (request, response) => {
    const api_url = `https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=f98b3a2103f941ad935a5c889490ff87`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

app.get('/businessNews', async (request, response) => {
    const api_url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f98b3a2103f941ad935a5c889490ff87`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

app.get('/technologyNews', async (request, response) => {
    const api_url = `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f98b3a2103f941ad935a5c889490ff87`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});