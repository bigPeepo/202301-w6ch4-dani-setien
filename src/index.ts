import "./loadEnvironments.js";
import express from "express";
import debug from "debug";
import { thingsRouter } from "./routers/thingsRouter.js";

const createDebug = debug("/things");

const app = express();

const port = 4008;
app.use(express.json());

app.use("/", thingsRouter);

app.listen(port, () => {
  createDebug(`A server is listening in the port ${port}`);
});
