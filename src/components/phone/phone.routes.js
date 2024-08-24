import { Router } from "express";

// MIDDLEWARES

// CONTROLLERS

import { createPhoneController } from "./controller/create-phone.controller.js";
import { readPhonesController } from "./controller/read-phones.controller.js";
import { findPhoneController } from "./controller/find-phone.controller.js";
import { updatePhoneController } from "./controller/update-phone.controller.js";
import { deletePhoneController } from "./controller/delete-phone.controller.js";

const router = Router();

router.post("/", createPhoneController);
router.get("/", readPhonesController);
router.get("/findQueryUser/", findPhoneController); // busca con id con query
router.put("/:id", updatePhoneController); //  ruta - actualiza por id
router.delete("/:id", deletePhoneController); 

export default router;
