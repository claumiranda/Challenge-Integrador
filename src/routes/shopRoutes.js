const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

router.get('/shop', shopController.shop);
router.get('/shop/item/:id', shopController.shopId);
router.post('/shop/item/:id/add', shopController.shopAdd);
router.get('/shop/cart', shopController.shopCart);
router.post('/shop/cart', shopController.shopCheckout);

module.exports = router;