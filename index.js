const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req,res) =>{
    res.send('Welcome to homepage')
})

app.get('/login', (req,res) =>{
    res.send('Welcome to Login page')
})

app.listen(8800, () =>{
    console.log("server is running")
}) 