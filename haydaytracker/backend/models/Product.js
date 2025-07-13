const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    requriredLevel: {
        type: Number,
        required: true
    },
    numberofproducts: {
        type: Number,
        required: true
    },
    acoountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    

}, {
    timestamps: true
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
