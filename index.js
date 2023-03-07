const express = require("express")
const app = express()
const bodyParser = require("body-parser")

//setando o ejs como renderizador de html
app.set('view engine', 'ejs')
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req, res) => {

    res.render("index")
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send("Formulário recebido! Titulo: " + titulo + descricao)
})


app.listen(3000, () => { console.log("App rodando!") })