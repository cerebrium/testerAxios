require('dotenv').config();
const express = require('express');
const app = express();

let config = {
    grant_type: client_credentials,
    client_id: process.env.PETFINDER_API_KEY,
    client_secret: 
}
app.get('/', (req, res) => {
    axios.get('')
    res.send('Home')
})

app.listen(3000)