import { Router } from "express";
import * as launches from "../controllers/launches.js";

const router = Router()

router.get("/launches", getLaunches);
router.get("/launches/:id", getLaunch);
router.post("/launches", createLaunch);
router.put("/launches/:id", updateLaunch);
router.delete("/launches/:id", deleteLaunch);
router.get("/launches/status/:status", getLaunchesByStatus);
router.get("/launches/year/:year", getLaunchesByYear);
router.patch("/launches/:id/status", updateLaunchStatus);
router.delete("/launches", deleteAllLaunches);

export default router;