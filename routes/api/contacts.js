const express = require("express");

const Contact = require("../../models/contact");
const router = express.Router();

const contactsSchema = require("../../models/contact");


router.post("/", async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const newContact = await Contact.create(req.body);
    res.status(201).json({
      status: "succes",
      code: 201,
      data: {
        result: newContact,
      },
    });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
