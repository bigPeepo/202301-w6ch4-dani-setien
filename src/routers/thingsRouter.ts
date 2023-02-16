import { Router } from "express";
import { getThingDetail, getThings } from "../controllers/thingsController.js";

// eslint-disable-next-line new-cap
export const thingsRouter = Router();

thingsRouter.get("/things", getThings);

thingsRouter.get("/things/:id", getThingDetail);
