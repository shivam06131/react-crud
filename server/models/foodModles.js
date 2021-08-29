import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  fruitName: {
    type: String,
    required: true,
  },
  fruitPrice: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);
export default Food;
