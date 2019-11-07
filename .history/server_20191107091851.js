require('dotenv').config();
const express = require('express');
const app = express();

let config = {
    
}
app.get('/', (req, res) => {
    axios.get('')
    res.send('Home')
})

app.listen(3000)