const express = require('express');
const app = express();
const router = require('./routes');
const logger = require('./middlewares/logger');
const { json } = require('express');


app.use(logger);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);
app.use((req, res) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' not found'
    })

})



app.listen(process.env.PORT || 5000, () => console.log('server running at http://127.0.0.1:3000'));

