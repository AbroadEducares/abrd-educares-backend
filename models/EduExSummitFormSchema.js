const mongoose = require("mongoose");

const EduExSummitFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    lastLevelOfStudy: {
      type: String,
      required: true,
      enum: ["+2 pursuing", "+2 passout", "Graduation", "Post Graduation"],
    },
    institution: {
      type: String,
      required: true,
      enum: [
        "SVIET",
        "Shivalik Public School",
        "Alliance International School",
        "Other",
      ],
    },
    otherInstitution: {
      type: String,
      trim: true, // Optional if "Other" is selected
    },
  },
  {
    timestamps: true, // ✅ Adds createdAt and updatedAt automatically
  }
);

const EduExSummitForm = mongoose.model("EduExSummitForm", EduExSummitFormSchema);

module.exports = EduExSummitForm;
