const router = require("express").Router();
const contestInfo = require('./Queries/contestInfo.json');
const Promises = require('bluebird');

const codeforeces_URL_1 = 'https://codeforces.com/api/user.rating?handle=ayushman_sinha';
const codeforeces_URL_2 = 'https://codeforces.com/api/user.info?handles=ayushman_sinha';

try {
    router.get('/', async (req, res) => {
        for(let i=0;i<=1;i++){
            try {
                const response = await fetch(contestInfo.url);
                const data = await response.json();                
                res.send(data);
                if(data.length>1) break;
            } catch (error) {
                console.log(error);
                res.status(500).send({ error: 'Internal Server Error' });
            }
        }
        
    });

    router.get('/codeforces', async (req, res) => {
        try {
            const response1 = await fetch(codeforeces_URL_1);
            const response2 = await fetch(codeforeces_URL_2);
            const data1 = await response1.json();
            const data2 = await response2.json();
            const combinedData = { data1, data2 };
            res.send(combinedData);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    });
} catch (err) {
    console.log(err);
}

module.exports = router;
