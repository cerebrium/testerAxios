require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

let config = {
    grant_type: 'client_credentials',
    client_id: process.env.PETFINDER_API_KEY,
    client_secret: process.env.PETFINDER_SECRET
}
app.get('/', (req, res) => {
    axios.get('https://api.petfinder.com/v2/oauth2/token', {params: {grant_type: config.grant_type,
                                                                    client_id: config.client_id,
                                                                    client_secret: config.client_secret}})
    .then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
    res.send('Home')
})

app.listen(3000)