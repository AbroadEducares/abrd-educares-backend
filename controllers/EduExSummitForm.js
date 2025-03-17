const EduExSummitForm = require("../models/EduExSummitFormSchema"); // Import the model correctly

exports.createEduExSummitForm = async (req, res) => {
  try {
    const newEduExSummitForm = new EduExSummitForm(req.body); 
    await newEduExSummitForm.save(); 
    res.status(200).send(newEduExSummitForm); 
  } catch (error) {
    res.status(400).send({ error: error.message }); 
  }
};
