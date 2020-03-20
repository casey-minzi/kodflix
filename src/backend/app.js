const express = require('express')
const app = express()
const port = 3000
const movieData = require('./movieData');

app.get('/rest/shows', (req, res) => res.send(movieData.map(movie => movie)));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))