import { pool } from '../config/database.js';

export const getItems = async (req, res) => {
    let results;
    const { category } = req.query;

    try {
        results = pool.query(`SELECT * FROM customItems WHERE category = $1`, [category]);
    }
    catch (err) {
        console.log('Error getting items: ', err);
    }

    res.status(200).json(results.rows);
};

// front end

// const category = 'Exterior';
// const response = await fetch(`http://localhost:3001/items?category=${category}`);
// const data = await response.json();
// console.log(data);