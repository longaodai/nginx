import express from "express";

const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
    res.send('Hello world in Express: ' + port)
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
