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

//GET LAUNCHES BY STATUS
export const getLaunchesByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const launches = await Launch.find({ status });
    res.json(launches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//GET LAUNCHES BY YEAR
export const getLaunchesByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const launches = await Launch.find({ date: { $regex: year } });
    res.json(launches);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//UPDATE LAUNCH STATUS
export const updateLaunchStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const launch = await Launch.findByIdAndUpdate(id, { status }, { new: true });
    res.json(launch);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//DELETE ALL LAUNCHES
export const deleteAllLaunches = async (req, res) => {
  try {
    const deleted = await Launch.deleteMany();
    if (deleted) {
      return res.status(200).send("All Launches Deleted");
    }
    throw new Error("No Launches found to delete");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

