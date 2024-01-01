import express from 'express'
import dotenv from 'dotenv'
import sql from 'mysql'
import bp from 'body-parser'
import fs from 'fs'
import https from 'https'
import bcrypt from 'bcrypt'

const env = dotenv.config()
const app = express()
const port = process.env.HANDLER_PORT
const apiKey = process.env.API_KEY

var con = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

con.connect()

const bodyParser = bp.json()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-api-key')
    next()
})

app.get("/", (req, res) => {
    res.send("test")
})

app.get("/fetch/:item", (req, res) => {
    const item = req.params.item

    switch (item) {
        case 'splash':
            let stmt = "SELECT `property`, `content` FROM `config` WHERE `category`='splash'"

            con.query(stmt, (err, splashdata) => {
                if (!err) {
                    res.send(splashdata)
                }else {
                    console.log(err)
                }
            })
    }
})

app.post("/new/:item", bodyParser, (req, res) => {
    if (req.headers['x-api-key'] == apiKey) {
        const item = req.params.item
    
        switch (item) {
            case 'user':
                if (req.body.username && req.body.email && req.body.password) {
                    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
                        let stmt = "INSERT INTO `users` (`username`, `email`, `password`) VALUES (?, ?, ?)"

                        con.query(stmt, [req.body.username, req.body.email, hashedPassword])
                    })

                    res.sendStatus(200)
                }else {
                    res.sendStatus(400)
                }
        }
    }else {
        res.sendStatus(401)
    }
})

https.createServer({
    key: fs.readFileSync(process.env.SSL_PRIVKEY, 'UTF-8'),
    cert: fs.readFileSync(process.env.SSL_CERT, 'UTF-8')
}, app).listen(port)