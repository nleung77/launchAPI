import fetch from "node-fetch";
import { promises as fsPromises } from "fs";

const url = "https://api.spacexdata.com/v5/launches";

fetch(url)
  .then((response) => response.json())
  .then((data) => fsPromises.writeFile("./launches.json", JSON.stringify(data)))
  .catch((error) => console.error(error));
