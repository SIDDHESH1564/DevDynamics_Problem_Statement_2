// inventoryManagement.js
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3002;

const inventory = {};
const carts = {};
const coupons = {
    'DISCOUNT10': { discountPercentage: 10, maxDiscount: 50 },
};

app.post('/addItemToInventory', (req, res) => {
    const { productId, quantity } = req.body;
    inventory[productId] = (inventory[productId] || 0) + quantity;
    res.send(`Added ${quantity} of product ${productId} to inventory.`);
});

app.post('/removeItemFromInventory', (req, res) => {
    const { productId, quantity } = req.body;
    if (inventory[productId] && inventory[productId] >= quantity) {
        inventory[productId] -= quantity;
        res.send(`Removed ${quantity} of product ${productId} from inventory.`);
    } else {
        res.status(400).send(`Insufficient quantity of product ${productId} in inventory.`);
    }
});

app.post('/addItemToCart', (req, res) => {
    const { customerId, productId, quantity } = req.body;
    if (!inventory[productId] || inventory[productId] < quantity) {
        return res.status(400).send(`Insufficient stock for product ${productId}`);
    }
    if (!carts[customerId]) {
        carts[customerId] = {};
    }
    carts[customerId][productId] = (carts[customerId][productId] || 0) + quantity;
    inventory[productId] -= quantity;
    res.send(`Added ${quantity} of product ${productId} to cart for customer ${customerId}.`);
});

app.post('/applyDiscountCoupon', (req, res) => {
    const { cartValue, discountId } = req.body;
    if (!coupons[discountId]) {
        return res.status(400).send('Invalid discount coupon.');
    }
    const { discountPercentage, maxDiscount } = coupons[discountId];
    const discountAmount = Math.min((cartValue * discountPercentage) / 100, maxDiscount);
    const discountedPrice = cartValue - discountAmount;
    res.send(`Original price: ${cartValue}, Discounted price: ${discountedPrice}`);
});

app.listen(PORT, () => console.log(`Inventory Management Server running on port ${PORT}`));
