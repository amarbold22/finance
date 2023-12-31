const { sql } = require("../config/pgDB");
const bcrypt = require("bcrypt");

//MVC Model View Controller -architecture

const signup = async(req, res) => {
    try{
        const { name, email, password } = req.body;
        //password encryption
        const hashedPassword = bcrypt.hashSync(password, 10);
        const data = await sql `INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword}) RETURNING id`;
        const { id } = data[0];
        res.status(200).json({ message: "Success", user: { id } });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Failed", err});
    }
};

const signin = async (req, res) => {
    try{
        const { userEmail, userPassword } = req.body;
        const findUser = await sql `SELECT email, password FROM users WHERE email = ${userEmail}`;
        if(findUser.length === 0)
            return res.status(400).json({message: "User not found"});

        const checkPass = bcrypt.compareSync(userPassword, findUser[0].password);

        if(!checkPass)
            return res.status(400).json({ message: "wrong username or password"});
        const { password, ...user } = findUser[0];
        res.status(200).json({ message: "Success", user});
    }
    catch(err){
        res.status(500).json({  message: "failed", err});
    }
};

const updateUser = async (req, res) => {
    try{
        const { currency_type, balance } =  req.body;
        const { userId } = req.params;

        const data = await sql`UPDATE users SET currency_type=${currency_type}, balance=${balance} WHERE id=${userId} RETURNING *`

        const { password, ...user }= data[0];
        res.status(200).json({ message: "success", user});
    }
    catch(err){
        res.status(500).json({message: "failed"});
    }
};

module.exports = { signup, signin, updateUser };