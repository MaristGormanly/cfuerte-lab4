/**
 * Lab 4 Project
 * Caroline Fuerte
 */

const express = require('express');
const app = express();

// opening the resources up as public
app.use(express.static('client/public'));

// app.get('/', function (req, res) {
//      res.render('index')
// });

//sending HTML file in response to URL
app.get('/', function(req, res){
    res.sendFile('index.html', {root: './client/views' })
})

app.listen(1337, () => console.log('Fuerte\'s application running on port 1337!'));
