import express from 'express';

let app = express();

app.get('/tes', (req,res,next) => {
    res.status(200).send(['aaaa', 'I love', 'My Story', 'very much'])
})

app.listen(7700, () => {
    console.log('Server running on 7700')
})