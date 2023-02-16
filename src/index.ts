import "./loadEnvironments.js";
import express from "express";
import debug from "debug";
import { getThings } from "./controllers/thingsController.js";
import { garlicBreadFacts } from "./data/garlicBreadFacts.js";
import { GarlicBreadFact } from "./data/types.js";

const createDebug = debug("/things");

const app = express();

const port = 4008;
app.use(express.json());

app.get("/things", (req, res) => {
  res.status(200).json({ garlicBreadFacts });
});

app.get("/things/:id", (req, res) => {
  const { id } = req.params;

  const garlicBreadFact = garlicBreadFacts.find((fact) => fact.id === +id);

  res.status(200).json({ garlicBreadFact });
});

app.listen(port, () => {
  createDebug(`A server is listening in the port ${port}`);
});
