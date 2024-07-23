
import express from "express"
import { PORT } from "./src/config/config.js"
import { apiRouter } from "./src/router/api/api.router.js";


const app = express()

app.use("/api", apiRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`)
})

