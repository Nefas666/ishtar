const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: '212.237.39.101',
    user: 'ish_tar',
    password: '#N3f4AS!6',
    database: 'ishtar'
});

app.post('/register', function(req, res) {
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


});