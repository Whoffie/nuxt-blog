import express from 'express'
import dotenv from 'dotenv'
import sql from 'mysql'

const env = dotenv.config()
const app = express()
const port = process.env.HANDLER_PORT

var con = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

con.connect()

app.get("/fetch/:item", (req, res) => {
    const item = req.params.item

    switch (item) {
        case 'splash':
            let stmt = "SELECT `property`, `data` FROM `config` WHERE `category`='splash'"

            con.query(stmt, (err, splashdata) => {
                if (!err) {
                    res.send(splashdata)
                }else {
                    console.log(err)
                }
            })

            break;
    }
})

app.listen(port, () => {
    console.log("Listening for requests")
})