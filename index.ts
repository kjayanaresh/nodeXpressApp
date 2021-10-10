import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done! Buddy... :-)');
})

app.listen(8080, () => {
    console.log('The application starting on 8080...');
    console.log('The application is listening on port 8080!');
})