const express = require('express');
const router = express.Router();
const userData = require('../services/userData');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await userData.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting data user `, err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        res.json(await userData.create(req.body));
    } catch (err) {
        console.error(`Error while creating data user`, err.message);
        next(err);
    }
});

module.exports = router;