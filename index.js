import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

const API_KEY = process.env.TASHU_API_KEY;
const API_URL = 'https://bikeapp.tashu.or.kr:50041/v1/openapi/station';

app.use(cors());

app.get('/', (req, res) => {
    res.send('Tashu API 서버가 정상적으로 동작 중입니다.');
});

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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 API 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
