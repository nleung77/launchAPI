import db from "../db/connection.js";
import launchData from "../seed/launches.json" assert { type: "json" };
import Launch from "../models/Launch.js";

const scrubbedLaunchData = launchData.map(
  ({
    name,
    launchpad,
    date_utc,
    details,
    failures: { time, altitude, reason },
    success,
    flight_number,
  }) => {
    return {
      name,
      launchpad,
      date_utc,
      details,
      failures: { time, altitude, reason },
      success,
      flight_number,
    };
  }
);

const insertData = async () => {
  //Reset Database
  await db.dropDatabase();

  //Insert Launches into the Database
  await Launch.create(scrubbedLaunchData);

  //Close Database connection
  await db.close();
};

insertData();
