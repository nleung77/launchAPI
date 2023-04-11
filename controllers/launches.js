import Launch from "../models/Launch.js";

export const getLaunches = async (req, res) => {
  try {
    const launches = await Launch.find();
    res.json(launches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLaunch = async (req, res) => {
  try {
    const { id } = req.params;

    const launch = await Launch.findById(id);
    res.json(launch);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createLaunch = async (req, res) => {
  try {
    const launch = new Launch(req.body);
    await launch.save();
    res.status(201).json(launch);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateLaunch = async (req, res) => {
  const { id } = req.params;
  const launch = await Launch.findByIdAndUpdate(id, req.body);
  res.status(200).json(launch);
};

export const deleteLaunch = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Launch.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Launch Deleted");
    }

    throw new Error("Launch not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLaunchesByName = async (req, res) => {
  try {
    const { name } = req.params;
    const launches = await Launch.find({ name: { $regex: name, $options: "i" } });
    res.json(launches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLaunchesByLaunchpad = async (req, res) => {
  try {
    const { launchpad } = req.params;
    const launches = await Launch.find({ launchpad: launchpad });
    res.json(launches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUpcomingLaunches = async (req, res) => {
  try {
    const upcomingLaunches = await Launch.find({ date_utc: { $gte: new Date() } });
    res.json(upcomingLaunches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getFailedLaunches = async (req, res) => {
  try {
    const failedLaunches = await Launch.find({ success: false });
    res.json(failedLaunches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLaunchesByFlightNumber = async (req, res) => {
  try {
    const { flightNumber } = req.params;
    const launches = await Launch.find({ flight_number: flightNumber });
    res.json(launches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};