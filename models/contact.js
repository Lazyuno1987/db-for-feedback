const { Schema, model } = require("mongoose");
const contactSchema = Schema(
  {
    
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    message: {
      type: String,
      required: [true, "Set message for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);
const Joi = require("joi");
const contactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  message: Joi.string().required()
 
});
module.exports = contactsSchema;

module.exports = Contact;
