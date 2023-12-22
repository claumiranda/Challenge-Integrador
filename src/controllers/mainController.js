const index =  (req, res)=>{res.render('index')};
const contact = (req, res)=>{ res.send("Route Contact")};
const about = (req, res)=>{ res.send("Route About")};
const faqs = (req, res)=>{ res.send("Route Faqs")};

module.exports = {
    index,
    contact,
    about,
    faqs
};