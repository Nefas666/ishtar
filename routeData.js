const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const conn = require('./connectionString.js');

var result;


router.get('/login', function(req, res, next) {
    conn.getConnection(
        function(err, client) {
            client.query('SELECT * FROM UserData', function(err, rows) {
                if (err) {
                    console.log('query error u silly goose');
                }
                res.json(rows);
                client.release();
            });
        });
});

/*app.post('/register', function(req, res) {
    const age = form.age.value;
    const gender = form.gender.value;
    const sex = form.sex.value;

    const data = {
        sex,
        gender,
        age
    };

    connection.query('INSERT INTO UserData (UserSexID, UserGender, UserAge) SET ?', data, function(error, results, fields) {
        if (error) throw error;
        res.send('table filled with 3 new entries')
    });


});*/