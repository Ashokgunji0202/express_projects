// deno-lint-ignore-file
import express from "express";
import { connectDB } from "./config/db.js";
import { createProductTable } from "./models/product.model.js";
import productRoutes from "./routes/product.route.js";


const app = express();

app.get("/", (req, res) => {    
    res.send("Hello from the backend");
});
app.use(express.json());// allows to use to accept JSON data in the body

app.use("/api/products",productRoutes);


app.listen(5000, () => {
    connectDB();
    createProductTable();
    console.log(`Server is running on port http://localhost:5000`);
});
//MDW6VwKnS5Vsb9tT