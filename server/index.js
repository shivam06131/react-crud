import express from "express";
import mongoose from "mongoose";
import router from "./routes/foodRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;
app.use(router);

const CONNECTION_URL =
  "mongodb+srv://NEWCRUD:04212104@cluster0.peeqi.mongodb.net/food";

mongoose
  .connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => app.listen(PORT, () => console.log(`connected to port ${PORT}`)))
  .catch((e) => console.log(e));

mongoose.set("useFindAndModify", false);
