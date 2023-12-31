const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const recordRoutes = require("./routes/recordRoutes");
const imageRoutes = require("./routes/imageRoutes");
const transRoutes = require("./routes/transRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/users", userRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/transaction", transRoutes);

app.listen(PORT, ()=>{
    console.log(`Сервер ${PORT} дээр аслаа`);
});