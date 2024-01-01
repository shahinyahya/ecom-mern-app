const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderId: { type: String, required: true, unique: true },
        paymentId: { type: String, required: true, unique: true },
        signature: { type: String, required: true },
    },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);