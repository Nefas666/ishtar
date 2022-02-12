const mysql = require("mysql");

const pool = mysql.createPool({
    host: '212.237.39.101',
    user: 'ish_tar',
    port: 3306,
    password: '#N3f4AS!6',
    database: 'ishtar'
});

exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            return callback(err);
        }
        callback(err, conn);
    });
};