import { Phone } from "../domain/phone.model.js";

const readPhonesController = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
  } catch (error) {
    console.error(error);
  }
};

export { readPhonesController };
