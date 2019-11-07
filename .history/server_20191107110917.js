require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');


app.get('/', (req, res) => {
    let config = {
        grant_type: process.env.GRANT_TYPE,
        client_id: process.env.PETFINDER_API_KEY,
        client_secret: process.env.PETFINDER_SECRET,
        bearer: '',
    }
    axios.post('https://api.petfinder.com/v2/oauth2/token', config)
    .then(response => {
        console.log(response.data.access_token)
        var token = response.data.access_token
        axios.get('https://www.petfinder.com/dog/spot-120/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1', {headers: {
            Authorization: `Bearer ${token}`
        }})
    }).then(response => {
        console.log('-----------------------   Second Step')
            console.log(response.data)
        })
        .catch(err => {
        console.log(err.response)
    })
    res.send('Home')
})

app.listen(3000)