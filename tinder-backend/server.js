import express from "express"
const app = express()
import CardsRoutes from "./routes/cards.route.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
dotenv.config()

const port = process.env.PORT ||5000


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())
//Routes
app.use("/cards" ,CardsRoutes)


app.get("/" , async(req,res) => {
    res.status(200).send("<h1>Hello Am a Programmer</h1>")
})


mongoose.connect("mongodb+srv://danieladelola651:UsOkoij2K9wPItwE@cluster0.xhndc.mongodb.net/tinder-backend?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to Database")
app.listen(port , () => {
    console.log(`server started succesfully on ${port}`)
})
}
)

.catch(() => {console.log("Connection failed")})

