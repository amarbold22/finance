const { sql } = require("../config/pgDB");

const signup = async(req, res) => {
    console.log("body", req.body);
    const { name, email, password} = req.body;
    await sql `INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${password})`;
    res.status(200).json({ message: "Success" });
}

module.exports = { signup };