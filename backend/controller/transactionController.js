const { sql } = require("../config/pgDB");

const transaction = async (req, res) => {
    try{
        const { user_id, name, amount, transaction_type, description, category_id } = req.body;
        const findUser = await sql `SELECT id FROM users WHERE id = ${user_id}`;
        if(findUser.length === 0)
            return res.status(200).json({ message: "User not found"});
        await sql `INSERT INTO transaction(user_id, name, amount, transaction_type, description, category_id) VALUES(
            ${user_id}, ${name}, ${amount}, ${transaction_type}, ${description}, ${category_id}
        )`;
        res.status(200).json({ message: "Success"});
    }
    catch(err){
        console.log(err);
        res.status(500).json( {message: "Error", err})
    }
};

const transaction_get = async(req, res) => {
    try{
        const { user_id } = req.body;
        const findUser = await sql `SELECT id FROM users WHERE id = ${user_id}`;
        if(findUser.length === 0)
            return res.status(400).json({message: "User not found"});
        const data = await sql `SELECT * FROM transaction WHERE user_id = ${user_id}`;
        res.status(200).json({ message: "Success", data});
    }
    catch(err){
        res.status(500).json({ message: "Failed"}, err);
    }
};

const transaction_put = async(req, res) => {
    try{
        const { user_id, name, description } = req.body;
        const findUser = await sql `SELECT id FROM users WHERE id = ${user_id}`;
        if(findUser.length === 0)
            return res.status(400).json({message: "User not found"});
        await sql `UPDATE transaction SET name = ${name}, description = ${description} WHERE user_id = ${user_id}`
        res.status(200).json({message: "Success"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Failed", err});
    }
};

const transaction_delete = async(req, res) => {
    try{
        const { user_id } = req.body;
        const findUser = await sql `SELECT id FROM users WHERE id = ${user_id}`;
        if(findUser.length === 0)
            return res.status(400).json({message: "User not found"});
        await sql `DELETE FROM transaction WHERE user_id = ${user_id}`;
        res.status(200).json({message: "Successfully deleted"});
    }
    catch(err){
        res.status(500).json({message: "Failed", err});
    }
};

const transaction_param = async(req, res) => {
    try{
        const type = req.query.type;
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;
        const { user_id } = req.body;
        const data = await sql `SELECT * FROM transaction WHERE user_id = ${user_id} transaction_type = ${type} AND createdat > ${startDate} AND createdat < ${endDate}`;
        // console.log(param);
        res.status(200).json({message: "Success", data});
    }
    catch(err){
        res.status(500).json({message: "Failed", err});
    }
}

module.exports = { transaction, transaction_get, transaction_put, transaction_delete, transaction_param };

