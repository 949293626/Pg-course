const express = require("express")
const cors = require("cors");
const bodyparser = require('body-parser');
const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser())


app.get('/',(req, res) => {
    res.send("Hello world!")
})
app.get("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send("Registration form recived for user")
})

app.get("/login", (req, res) => {
    res.send("Login Successful")
})


app.listen(port, () => {
    console.log("My server is listening on port 4000")
})



