import express from  'express';

let app = express();

app.get('/users', (req, res, next) => {
    res.send(["00001","tes","18","304"])
})

app.listen(3000, () => {
    console.log('Server running on 3000');
})

