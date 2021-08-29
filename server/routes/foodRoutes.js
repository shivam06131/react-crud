import express from "express";
const router = express.Router();
import Food from "../models/foodModles.js";

router.post("/create", async (req, res) => {
  const fruitName = req.body.fruitName;
  const fruitPrice = req.body.furitPrice;

  const foodData = new Food({ fruitName: fruitName, fruitPrice: fruitPrice });
  try {
    await foodData.save();

    // await new Food.save({ fruitName: fruitName, fruitPrice: fruitPrice });  this will give error
    res.status(200).send("sucessfully data was registered");
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Food.find();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update", async (req, res) => {
  try {
    const id = req.body.id;
    const fruitName = req.body.fruitName;
    await Food.findByIdAndUpdate(id, {
      fruitName: fruitName,
    });
    res.send("fruit finally updated");
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Food.findOneAndDelete(id);
  } catch (error) {
    console.log(error);
  }
});

export default router;
