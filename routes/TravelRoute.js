import express from "express";
import {
  getTravels,
  getTravelById,
  updateTravel,
  deleteTravel,
  createTravel,
  getDestination,
  getRestaurant,
} from "../controllers/Travel.js";

const router = express.Router();

router.get("/travels", getTravels);
router.get("/travel/:id", getTravelById);
router.post("/travel", createTravel);
router.patch("/travel/:id", updateTravel);
router.delete("/travel/:id", deleteTravel);
router.get("/destination", getDestination);
router.get("/restaurant", getRestaurant);

export default router;
