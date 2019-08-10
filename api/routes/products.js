const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get request successful'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'post request successful'
    });
});

router.get('/:productID', (req, res, next) => {
    const id_val = req.params.productID;
    if(id_val === 'new'){
        res.status(200).json({
            message: 'this is a special product',
            id: id_val
        });
    }else{
        res.status(200).json({
            message: 'this is a normal product'
        });
    }
});

module.exports = router;