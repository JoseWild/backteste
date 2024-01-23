const express = require('express')
const path = require('path')

const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"))
})
router.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/contato.html"))
})

app.use(router)

app.listen(21157,() => {
    console.log('Servidor rodando')
})



