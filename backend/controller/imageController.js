
const { sql } = require("../config/pgDB");

const upload =  async (req, res) => {
    console.log("IMAGE", req.file);
    console.log("IMAGE", req.body);
    const { name, email, password } = req.body;
    // const image = req.file;
    // const img = Buffer.from();
    // await sql`INSERT INTO users(name, email, password, avatar_img)
    //           VALUES(${name}, ${email}, ${password}, ${req.file.buffer})`;
    // const datas = await sql`SELECT * FROM users`;

    res.status(201).send({ message: "Success" });
};

module.exports = { upload };