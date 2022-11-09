const express = require("express")

const app = express()

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