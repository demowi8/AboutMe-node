const express = require('express');
const ehbs = require('express-handlebars');
const path = require('path');


const PORT = process.env.PORT || 3000;
const app = express();

app.engine('hbs', ehbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/view/layout',
    partialsDir: __dirname + '/view/partials'
}));
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello from the other side')
})

app.listen(PORT, () => {

})