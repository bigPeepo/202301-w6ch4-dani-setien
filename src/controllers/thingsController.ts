import { debug } from "console";
import type { Request, Response } from "express";
import { nanoid } from "nanoid";
import { garlicBreadFacts } from "../data/garlicBreadFacts.js";
import {
  type GarlicBreadFact,
  type UnidentifiedGarlicBreadFact,
} from "../data/types.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ garlicBreadFacts });
};

export const getThingDetail = (req: Request, res: Response) => {
  const { id } = req.params;

  const garlicBreadFact = garlicBreadFacts.find((fact) => fact.id === id);

  res.status(200).json({ garlicBreadFact });
};

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;

  const targetFact = garlicBreadFacts.find((fact) => fact.id === id);

  garlicBreadFacts.splice(garlicBreadFacts.indexOf(targetFact!), 1);

  res.status(200).json({ targetFact });
};

export const addThing = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UnidentifiedGarlicBreadFact
  >,
  res: Response
) => {
  const newGarlicBreadFact = { id: nanoid(), fact: req.body.fact };

  garlicBreadFacts.push(newGarlicBreadFact);

  res.status(200).json({ garlicBreadFacts });
};

export const changeThing = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    GarlicBreadFact
  >,
  res: Response
) => {
  const { id, fact } = req.body;

  const indexOfTargetFact = garlicBreadFacts.findIndex(
    (fact) => fact.id === id
  );

  garlicBreadFacts[indexOfTargetFact].fact = fact;

  res.status(200).json({ garlicBreadFacts });
};
