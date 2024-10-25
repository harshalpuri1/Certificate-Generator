const pool = require('../../services/database/mysql');

const addCertificateDetails = async (recipientName,userId,templateId) => {

    const [result] = await pool.query('INSERT INTO certificatedetails (recipient_name,user_id, template_id) VALUES (?, ?, ?)',[recipientName,userId,templateId]);

    return result
};

module.exports = {addCertificateDetails};
