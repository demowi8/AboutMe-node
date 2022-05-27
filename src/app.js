const express = require('express');
const ehbs = require('express-handlebars');
const path = require('path');


const PORT = process.env.PORT || 3000;
const app = express();

app.engine('hbs', ehbs.engine({
    layoutsDir: __dirname + '/views/layout/',
    defaultLayout: false,
    extname: '.hbs',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res) => {
   
    res.render('home')
})

app.listen(PORT, () => {

})