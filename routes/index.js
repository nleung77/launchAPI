import {Router} from "express";
import launchesRoutes from "./launches.js";

const router = Router()

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/launches", launchesRoutes);

export default router;