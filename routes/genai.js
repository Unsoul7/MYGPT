const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDQwWUrMrLX5JvrzFJie4qTAXyI896NvXc");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post('/generate', async (req, res) => {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text() });
});

router.get('/gentest',(req,res)=>{
    res.send('Hello World');
});


module.exports = router;