import express from 'express';
const shell = require('shelljs');
let app = express();


app.get('/webhook', (req,res,next) => {
    shell.exec('/data/ims/ims-web/webhook/deploy_prod');
    res.status(200).send(['Webhook sudah jalan'])
})

app.listen(5000, () => {
   // console.log('Server running on 7700')
})
