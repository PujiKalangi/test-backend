import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import TravelRoute from "./routes/TravelRoute.js";
import PlaceRoute from "./routes/PlaceRoute.js";
import db from "./config/Database.js";

const app = express();

(async () => {
  await db.sync();
})();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(TravelRoute);
app.use(PlaceRoute);

app.listen(5001, () => console.log("Server Up and Running..."));
