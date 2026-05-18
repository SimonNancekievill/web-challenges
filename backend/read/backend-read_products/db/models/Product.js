import mongoose from "mongoose";

const { Schema } = mongoose;

// const productSchema = new Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   currency: { type: String, required: true },
// });

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  currency: { type: String },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
