const express = require("express");
require("dotenv").config();

const userRoute = require("./routes/userRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("api/users", userRoute);


app.get("/", async (req, res) => {
    try{
        const result = await sql`SELECT * FROM employee LIMIT 5`;
        console.log("ANSWER", result)
        res.send("Welcome Expense Tracker REST API");
    }catch(error){
        res.status(400).send("Error", error);
    }
});
app.post("/api/signup", async (req, res) => {
    try{
        const { user } = req.body.params; 
        const result = await sql `INSERT INTO users(email, name, password)
        VALUES(${user.email}, ${user.name}, ${user.password} )`;
    }catch(error){
        res.status(400).send("Error", error);
    }
});

app.listen(PORT, ()=>{
    console.log(`Сервер ${PORT} дээр аслаа`);
});