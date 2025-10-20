import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send('Car Server');
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})