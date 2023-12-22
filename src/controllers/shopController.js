const shop =  (req, res)=>{ res.send("Route SHOP")};
const shopId = (req, res)=>{ res.send(`Route SHOP - ID=${req.params.id}`)};
const shopAdd = (req, res)=>{ res.send("Route SHOP - ADD")};
const shopCart = (req, res)=>{ res.send("Route SHOP - CART")};
const shopCheckout = (req, res)=>{ res.send("Route SHOP - CHECKOUT")};

module.exports = {
    shop,
    shopId,
    shopAdd,
    shopCart,
    shopCheckout
};