import { Router } from "express";
import * as launches from "../controllers/launches.js";

const router = Router()

router.get("/", launches.getLaunches);
router.get("/:id", launches.getLaunch);
router.post("/", launches.createLaunch);
router.put("/:id", launches.updateLaunch);
router.delete("/:id", launches.deleteLaunch);

router.get("/name/:name", launches.getLaunchesByName);
router.get("/launchpad/:launchpad", launches.getLaunchesByLaunchpad);
router.get("/upcoming", launches.getUpcomingLaunches);
router.get("/failed", launches.getFailedLaunches);
router.get("/flightnumber/:flightNumber", launches.getLaunchesByFlightNumber);

export default router;