const router = require("express").Router();
const Razorpay = require("razorpay"); //(process.env.RAZORPAY_KEY_ID);
const Order = require("../models/Order");

// Getting key id from backend

router.get("/get-razorpay-key", (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
});

// Create Order

router.post("/create-order", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        const options = {
            amount: req.body.amount,
            currency: 'INR',
        };
        const order = await instance.orders.create(options);
        if (!order) return res.status(500).json("Error has occured.");
        res.send(order);
    } catch (razorErr) {
        res.status(500).json(razorErr);
    }
});

// Payment Order

router.post("/payment-order", async (req, res) => {
    try {
        const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
        const newOrder = Order({
            isPaid: true,
            amount: amount,
            razorpay: {
                orderId: razorpayOrderId,
                paymentId: razorpayPaymentId,
                signature: razorpaySignature,
            },
        });
        await newOrder.save();
        res.status(200).json("The payment was successful")
    } catch (razorErr) {
        console.log(razorErr);
        res.status(500).json(razorErr);
    }
});

// List Orders

router.get("/list-orders", async (res, req) => {
    const orders = await Order.find();
    res.status(200).json(orders);
})





















