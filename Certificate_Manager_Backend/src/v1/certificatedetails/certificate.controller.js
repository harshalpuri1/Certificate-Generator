const {addCertificateDetails} = require('./certificate.services');
const{successResponse,ServerSuccess} = require('../utils/apiResponse');


const certificateDetails= async (req, res,next)=>{
    try{
        const userId = req.client.userId;
        const{recipientName,templateId}=req.body;


        await addCertificateDetails(recipientName,userId,templateId);

        const successMessage = await successResponse(true,200,{message:ServerSuccess.success.certificateCreateSuccess});

        res.status(200).json(successMessage);

    }
    catch(error){
        next(error);
    }
};

module.exports={certificateDetails};