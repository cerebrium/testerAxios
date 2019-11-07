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
        axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {headers: {
            Authorization: `Bearer ${token}`
        }})
    }).then(response => {
        console.log('-----------------------   Second Step')
        res.send('Why you no load')
            console.log(JSON.stringify(response.data))
        })
        .catch(err => {
        console.log(err.response)
    })
    
})

app.listen(3000)