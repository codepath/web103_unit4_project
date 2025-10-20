import { pool } from './database.js';
import itemData from '../data/items.js';
import testCar from '../data/testCar.js';

const createTables = async () => {
    try {
        await pool.query(`DROP TABLE IF EXISTS cars`);
        await pool.query(`DROP TABLE IF EXISTS customItems`);

    await pool.query(`
            CREATE TABLE customItems (
                id SERIAL PRIMARY KEY,
                category VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                pricePoint VARCHAR(10) NOT NULL
        )
    `);

    await pool.query(`
            CREATE TABLE cars (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                wheels VARCHAR(255) NOT NULL,
                exterior VARCHAR(255) NOT NULL,
                interior VARCHAR(255) NOT NULL,
                roof VARCHAR(255) NOT NULL,
                totalCost VARCHAR(10) NOT NULL
        )
    `);
    }
    catch (err) {
        console.log(err);
    }

};

const seedCustomItemsTable = async () => {
    for (const item of itemData) {
        await pool.query(
            `INSERT INTO customItems (category, name, pricePoint)
             VALUES ($1, $2, $3)`,
             [
                item.category,
                item.name,
                item.pricePoint
             ]
        );
        console.log(`${item.name} added`);
    }
};

const seedTestCarTable = async () => {
    for (const car of testCar) {
        await pool.query(
            `INSERT INTO cars (name, wheels, exterior, interior, roof, totalCost)
             VALUES ($1, $2, $3, $4, $5, $6)`,
             [
                car.name,
                car.wheels,
                car.exterior,
                car.interior,
                car.roof,
                car.totalCost
             ]
        );
        console.log(`${car.name} added`);
    }
}

const resetDatabase = async () => {
    await createTables();
    await seedCustomItemsTable();
    await seedTestCarTable();
    console.log('Database reset!');
    await pool.end();
};

resetDatabase();