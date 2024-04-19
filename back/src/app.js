import express from "express";
import router from "./routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
