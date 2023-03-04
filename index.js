const express = require("express")
const app = express()

//setando o ejs como renderizador de html
app.set('view engine', 'ejs')

app.get("/", function(req, res){
    res.render("principal/perfil")
})


app.listen(3000, () => { console.log("App rodando!")})