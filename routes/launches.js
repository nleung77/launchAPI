import { Router } from "express";
import * as launches from "../controllers/launches.js";

const router = Router()

router.get("/launches", getLaunches);
router.get("/launches/:id", getLaunch);
router.post("/launches", createLaunch);
router.put("/launches/:id", updateLaunch);
router.delete("/launches/:id", deleteLaunch);

router.get("/launches/name/:name", getLaunchesByName);
router.get("/launches/launchpad/:launchpad", getLaunchesByLaunchpad);
router.get("/launches/upcoming", getUpcomingLaunches);
router.get("/launches/failed", getFailedLaunches);
router.get("/launches/flightnumber/:flightNumber", getLaunchesByFlightNumber);

export default router;