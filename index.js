const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDQwWUrMrLX5JvrzFJie4qTAXyI896NvXc");

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.set('view engine', 'ejs');
app.use('/api', require('./routes/genai'));

app.get('/', async (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});