import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = 5000;

const API_KEY = process.env.TASHU_API_KEY;
const API_URL = 'https://bikeapp.tashu.or.kr:50041/v1/openapi/station';

app.use(cors());

app.get('/api/station', async (req, res) => {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'api-token': API_KEY
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Fetch failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
