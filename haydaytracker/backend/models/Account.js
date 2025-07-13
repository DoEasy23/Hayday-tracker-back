const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    count: Number
}, { _id: false });

const accountSchema = new mongoose.Schema({
    name: String,
    level: Number,
    capasityOfSilo: Number,
    products: {
        type: [productSchema],
        validate: {
            validator: function(products) {
                const ids = products.map(p => p.productId);
                return ids.length === new Set(ids).size; // unique kontrolü
            },
            message: 'Her ürün sadece bir kez eklenebilir!'
        }
    }
});

module.exports = mongoose.model('Account', accountSchema);