import mongoose from "mongoose";
import { Phone } from "../domain/phone.model.js";

const findPhoneController = async (req, res) => {
  try {
    const idPhone = req.query.id;
    if (!mongoose.Types.ObjectId.isValid(idPhone)) {
      return res.status(400).json({ message: "Invalid phone ID" });
    }
    const phone = await Phone.findById(idPhone);
    if (!phone) {
      return res.status(404).json({ message: "Phone not found" });
    }
    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { findPhoneController };
