const EduFair = require('../models/EduFairSchema');

exports.EduFair = async (req, res) => {
    try {
        const eduFair = new EduFair(req.body);
        await eduFair.save();
        res.status(200).send(eduFair);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
    };
    