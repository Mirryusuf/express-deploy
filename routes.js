const express = require('express').Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads' });
const fs = require('fs');
const path = require('path');

express.get('/', (req, res) => {
    const { page, total, id } = req.query;
    res.json({
        status: "succesfully",
        message: "welcome to home page",
        page,
        total,
        id
    })
})

// express.post('/product', (req, res) => {
//     res.json(req.body)
// })

// express.post('/product', upload.single('image'), (req, res) => {
//     const { name, stock, price } = req.body;
//     const image = req.file;
//     res.send({
//         name,
//         stock, 
//         price,
//         image
//     })
// })
express.get('/product', (req, res) => {
    res.json({
        status: "succesfully",
        message: "status page"
    })
})

express.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id
    })
})

express.post('/product', upload.single('image'), (req, res) => {
        const { name, stock, price } = req.body;
        const image = req.file;
        if(image){
            const target = path.join(__dirname, 'uploads', image.originalname);
            fs.renameSync(image.path, target)
            res.json({
                name,
                stock, 
                price,
                image
            })
        }
    })

express.get('/category', (req, res) => {
    res.json({
        status: "succesfully",
        message: "category page"
    })
})

express.get('/:category/:tag', (req, res) => {
    const { category, tag } = req.params;
    res.json({
        category,
        tag
    })
})

module.exports = express;