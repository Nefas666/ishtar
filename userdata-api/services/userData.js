const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const userData = require('../../cookies');


async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT UserID, UserSexID, UserGender, UserAge, UserX, UserY 
    FROM UserData LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}


async function create(userData) {
    const result = await db.query(
        `INSERT INTO UserData 
      (UserSexID, UserGender, UserAge, UserX, UserY) 
      VALUES 
      ( ${userData.sex}, ${userData.gender}, ${userData.age}, ${userData.x}, ${userData.y})`
    );

    let message = 'Error in creating user data';

    if (result.affectedRows) {
        message = 'user data created successfully';
    }

    return { message };
}

module.exports = {
    getMultiple,
    create
}