/*BAIXAR BIBLIOTECA 

NPM INIT
NPM INSTALL
EXPRESS,NODEMOM,FS  */




const dados = require('./data/dados.json')

const express = require('express')

const fs = require('fs')

const server = express()
server.use(express.json())

server.listen(3000,() => {
    console.log('O SERVIDOR ESTA FUNCIONANDO')
})

//SELECT * FROM USUARIOS

server.get('/usuarios',(req, res) => {
return res.json(dados.Usuarios)

})