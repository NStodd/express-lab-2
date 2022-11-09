const express = require("express")
const app = express()

const  MAGIC8RESPONSES = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

app.get('/magic/:question', (req, res) => {
    const question = req.params.question
    const answer = MAGIC8RESPONSES[Math.floor(Math.random() *  MAGIC8RESPONSES.length)]
    res.send(`
        ${question}
        <h1>${answer}</h1>`)
}) 

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseInt(req.params.total)
    const tipPercentage = parseInt(req.params.tipPercentage)
    const tip = total * tipPercentage / 100
    res.send(`${tip}`)
}) // 

app.get('/greeting/:name', (req, res) => {
    res.send(`Yo, ${req.params.name}!`)
})

app.listen(3000, () => {

})

/*
app.get('', (req, res) => {}) // route template
*/