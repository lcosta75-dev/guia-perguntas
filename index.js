const express = require("express")
const app = express()

//setando o ejs como renderizador de html
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) => {

    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})


app.listen(3000, () => { console.log("App rodando!") })