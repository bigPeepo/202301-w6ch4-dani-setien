import "./loadEnvironments.js";
import express from "express";
import debug from "debug";

const createDebug = debug("/things");

const app = express();

const port = 4000;

const garlicBreadFacts = [
  `Garlic bread is a popular side dish that is made by slicing bread and spreading garlic butter on it before baking or toasting it.`,
  `Garlic bread originated in Italy and is known as "pane all'aglio" in Italian.`,
  `The first recipe for garlic bread in the United States appeared in a 1940 cookbook called "The Joy of Cooking."`,
  `Garlic bread is often made with a combination of garlic, butter, and herbs such as parsley or oregano.`,
  `Some variations of garlic bread include the addition of cheese, such as mozzarella or parmesan.`,
  `In some parts of the world, garlic bread is made with different types of bread, such as baguette or sourdough.`,
  `Garlic bread can be served as a side dish or as an appetizer, and is often paired with Italian dishes such as pasta or pizza.`,
  `Garlic has many potential health benefits, such as improving cardiovascular health and boosting the immune system.`,
  `The strong smell of garlic can be eliminated by chewing fresh parsley or drinking milk.`,
  `Garlic bread can be frozen and reheated, but it may not taste as good as freshly baked garlic bread.`,
];

app.get("/things", (req, res) => {
  res.status(200).json({ garlicBreadFacts });
});

app.listen(port, () => {
  createDebug(`A server is listening in the port ${port}`);
});
