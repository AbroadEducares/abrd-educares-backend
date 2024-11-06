const EnquiryForm = require("../models/EnquiryFormSchema"); // Import the model correctly

exports.EnquiryForm = async (req, res) => {
  try {
    const enquiryForm = new EnquiryForm(req.body); // Creating instance with consistent naming
    await enquiryForm.save();
    res.status(200).send(enquiryForm);
  } catch (error) {
    res.status(400).send({ error: error.message }); // Send error message to help debug
  }
};
