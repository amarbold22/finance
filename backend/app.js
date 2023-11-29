const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Сервер ${PORT} дээр аслаа`);
});