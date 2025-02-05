const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.set('view engine', 'ejs');
app.use('./api', require('./routes/genai'));

app.get('/', async (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});