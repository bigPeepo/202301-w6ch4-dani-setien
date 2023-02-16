import { Router } from "express";
import {
  addThing,
  changeThing,
  deleteThing,
  getThingDetail,
  getThings,
} from "../controllers/thingsController.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/things", getThings);

thingsRouter.get("/things/:id", getThingDetail);

thingsRouter.delete("/things/:id", deleteThing);

thingsRouter.post("/things", addThing);

thingsRouter.put("/things", changeThing);
