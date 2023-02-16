import type { Request, Response } from "express";
import { garlicBreadFacts } from "../data/garlicBreadFacts.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ garlicBreadFacts });
};

export const getThingDetail = (req: Request, res: Response) => {
  const { id } = req.params;

  const garlicBreadFact = garlicBreadFacts.find((fact) => fact.id === +id);

  res.status(200).json({ garlicBreadFact });
};
