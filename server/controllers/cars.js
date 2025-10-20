import { pool } from '../config/database.js';

export const getCars = async (req, res) => {
    let results;

    try{
        results = pool.query(`SELECT * FROM cars ORDER BY id ASC`);
    }
    catch (err) {
        console.log('Error getting cars: ', err);
    }

    res.status(200).json(results.rows);
}