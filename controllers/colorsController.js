const express = require("express");
const {
  getAllColors,
  getColor,
  createColor,
  deleteColor,
  updateColor,
} = require("../queries/color");
const colors = express.Router();
const { checkName, checkBoolean } = require("../validations/checkColors");

//get all colors

//localhost:4005/colors/
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//localhost:4005/colors/:id

colors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const color = await getColor(id);
  if (color) {
    res.status(200).json(color);
  } else {
    res.status(404).json({ error: "Color not found" });
  }
});

//localhost:4005/colors
colors.post("/", checkName, checkBoolean, async (req, res) => {
  // const body=req.body
  // const color = await createColor(body);
  //       OR
  const color = await createColor(req.body);
  res.status(200).json(color);
});

colors.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedColor = await deleteColor(id);
  if (deletedColor.id) {
    res.status(200).json(deletedColor);
  } else {
    res.status(404).json({ message: "Color not found" });
  }
});

colors.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedColor = await updateColor(id, body);
  if (updatedColor.id) {
    res.status(200).json(updatedColor);
  } else {
    res.status(404).json({ error: "Color Not Found" });
  }
});

module.exports = colors;
