const { sql } = require("../config/pgDB");

const getAllCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM category`;

    res.status(200).json({ message: "success", categories });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { getAllCategory };