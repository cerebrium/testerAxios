require('dotenv').config();
const express = require('express');
const app = express();

let config = {
    grant_type: client_credentials,
    client_id: process.env.PETFINDER_API_KEY,
    client_secret: PETFINDER_SECRET
}
app.get('/', (req, res) => {
    axios.get('https://api.petfinder.com/v2/oauth2/token')
    .then(response => {
        console.log(response.data)
    })
    res.send('Home')
})

app.listen(3000)