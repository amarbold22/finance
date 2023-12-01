const { sql } = require("../config/pgDB");

const addCat = async (req, res) => {
    try{
        const { categoryName, categoryColor } = req.body;
        await sql `INSERT INTO catagories( name, category_color) VALUES( ${categoryName}, ${categoryColor})`;
        res.status(200).send({  message: "Success"});
    }   
    catch(err){
        console.log(err);
        res.status(500).send({  message: "Failed"});
    }
};

module.exports = { addCat };