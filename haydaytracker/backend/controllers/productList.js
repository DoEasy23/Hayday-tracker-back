//data kulasörü altında products.json dosyası var
// ondaki verileri frontend'e göndereceğiz
// böylelikle filtreleme işelmi yapabileceğiz

const productData = require('../data/products.json');

// Get all products
const GetProducts = (req, res) => {
    try {
        res.status(200).json(productData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Get a specific product by ID
const GetProductById = (req, res) => {
    const { id } = req.params;
    const product = productData.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
};

module.exports = {
    GetProducts,
    GetProductById
};