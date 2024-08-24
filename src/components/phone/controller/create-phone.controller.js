import {Phone} from "../domain/phone.model.js";

const createPhoneController = async (req, res) => {
  try {
    const phone = new Phone(req.body);
    await phone.save();
    res.status(201).json(phone)
  } catch (error) {
    console.error(error);
  }
};

export { createPhoneController };
