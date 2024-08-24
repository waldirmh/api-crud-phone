import mongoose from "mongoose";
import { Phone } from "../domain/phone.model.js";

const updatePhoneController = async (req, res) => {
  try {
    const phoneUpdate = req.body;
    const idPhone = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idPhone)) {
      return res.status(400).json({ message: " Invalid phone ID" });
    }
    const phone = await Phone.findByIdAndUpdate(idPhone, phoneUpdate, {
      new: true,
    });

    if (!phone) {
      return res.status(404).json({ message: "Phone not found" });
    }

    res.status(200).json({ message: "Update successful", phone });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { updatePhoneController };
