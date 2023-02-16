import type { Request, Response } from "express";
import { garlicBreadFacts } from "../data/garlicBreadFacts.js";
import { GarlicBreadFact } from "../data/types.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ garlicBreadFacts });
};

export const getThingDetail = (req: Request, res: Response) => {
  const { id } = req.params;

  const garlicBreadFact = garlicBreadFacts.find((fact) => fact.id === +id);

  res.status(200).json({ garlicBreadFact });
};

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const targetFact = garlicBreadFacts.find((fact) => fact.id === +id);

  garlicBreadFacts.splice(garlicBreadFacts.indexOf(targetFact!), 1);

  res.status(200).json({ targetFact });
};
