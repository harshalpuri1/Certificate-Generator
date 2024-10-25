const Boom = require('@hapi/boom');
const {getAllTemplate} = require('./templateApi.services');
const { successResponse } = require('../utils/apiResponse');
const { ServerError, ServerSuccess } = require('../utils/apiResponse');

const getAllTemplates = async (req, res, next) => {
    try {
        const templates = await getAllTemplate();
        const successMessage = await successResponse(true, 200, {message: ServerSuccess.success.templateRetrived, templates });
        return res.status(200).json(successMessage);
        
    } catch (error) {
        return next(Boom.internal(ServerError.error.databaseError));
    }
};

module.exports = { getAllTemplates };
