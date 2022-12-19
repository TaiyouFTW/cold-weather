import type { VercelRequest, VercelResponse } from '@vercel/node';
import request from 'request';

export default async (req: VercelRequest, res: VercelResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET') {
        request(
            'https://api.open-meteo.com/v1/forecast',
            {
                method: 'GET',
                qs: req.query,
            }, (error, response, body) => {
                if (response.statusCode == 200) {
                    res.status(200).send(response.body);
                } else {
                    res.status(response.statusCode).send("an error has occurred");
                }
            }
        );
    }
};