import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Launch = new Schema ({
    name: { type: String},
    launchpad: { type: String},
    date_utc: { type: Date},
    details: { String},
    failures: [{
        time: {type: String},
        altitude: {type: String},
        reason: { type: String},
    }],
    success: { type: Boolean},
    flight_number: { type: Number},
});

export default mongoose.model("launches", Launch);