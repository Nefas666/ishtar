const express = require('express');
const loader = require('loader.js');
const router = express.Router();
const mysql = require('mysql');

const conn = require ('./callDB_host_.js');

router.get(conn, function(req, res, next) {
    conn.getConnection(
        function (err, client) {
            client.query('SELECT * FROM viol_vid', function(err, rows){
                if(err){
                    console.log('query err u dumb fuck');
                }

                res.json(rows);
                client.release();

            });
        }
    );
});