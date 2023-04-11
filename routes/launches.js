import { Router } from "express";
import * as launches from "../controllers/launches.js";

const router = Router()

router.get("/launches", launches.getLaunches);
router.get("/launches/:id", launches.getLaunch);
router.post("/launches", launches.createLaunch);
router.put("/launches/:id", launches.updateLaunch);
router.delete("/launches/:id", launches.deleteLaunch);

router.get("/launches/name/:name", launches.getLaunchesByName);
router.get("/launches/launchpad/:launchpad", launches.getLaunchesByLaunchpad);
router.get("/launches/upcoming", launches.getUpcomingLaunches);
router.get("/launches/failed", launches.getFailedLaunches);
router.get("/launches/flightnumber/:flightNumber", launches.getLaunchesByFlightNumber);

export default router;