const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");

dotenv.config();

// Connecting MongoDB to cluster by url.

mongoose.connect(process.env.MONGO_URL).then(() => { console.log("DataBase Connection Successful!") }).catch(
    (err) => {
        console.log(err);
    });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



// Deriving Express module to create backend server by giving a port number.

app.listen(process.env.PORT || 5000, () => {
    console.log("The Backend server is running! ");
});



