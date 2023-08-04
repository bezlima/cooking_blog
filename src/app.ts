import express, { Response, Request } from "express";
const PORT = 8000
const app = express()

const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRouter')

app.use(express.json())

app.use(userRoute)
app.use(postRoute)


app.get('/', async (req:Request, res:Response) => {
    res.status(200).send('http://localhost:${PORT}/')
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}/`
))
