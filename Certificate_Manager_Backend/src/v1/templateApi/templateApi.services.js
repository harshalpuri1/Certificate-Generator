
const pool = require('../../services/database/mysql');


const getAllTemplate = async () => {
    const [rows] = await pool.query('SELECT templateId , certificateUrl FROM  templates');
   
    return rows;
};

module.exports = {
    getAllTemplate
}
