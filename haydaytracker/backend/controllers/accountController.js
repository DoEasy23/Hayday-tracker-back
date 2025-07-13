const Account = require('../models/Account');
const productsData = require('../data/products.json'); // products.json dosyanızın doğru yolda olduğundan emin olun

// Get all accounts
const GetAcounnts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching accounts', error });
    }
};

// Get a specific account by ID
const GetAccountById = async (req, res) => {
    const { id } = req.params;

    try {
        const account = await Account.findById(id);
        if (!account) return res.status(404).json({ message: 'Account not found' });
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching account', error });
    }
};

// Create a new account
const CreateAccount = async (req, res) => {
    const { name, level, capasityOfSilo } = req.body;

    try {
        const newAccount = new Account({ name, level, capasityOfSilo, products: [] });
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({ message: 'Error creating account', error });
    }
};

// Delete an account by ID
const DeleteAccount = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAccount = await Account.findByIdAndDelete(id);
        if (!deletedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting account', error });
    }
};

// Update an account by ID
const UpdateAccount = async (req, res) => {
    const { id } = req.params;
    const { name, level, capasityOfSilo } = req.body;

    try {
        const updatedAccount = await Account.findByIdAndUpdate(
            id,
            { name, level, capasityOfSilo },
            { new: true }
        );
        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({ message: 'Error updating account', error });
    }
};

// Get products of a specific account with details from products.json
const GetAccountProducts = async (req, res) => {
    const { id } = req.params;
    // const { maxLevel } = req.query; // maxLevel query'si frontend'de filtreleme yapıldığı için burada artık gerekli değil

    try {
        const account = await Account.findById(id);
        if (!account) return res.status(404).json({ message: 'Account not found' });

        // account.products'taki her bir ürünü productsData ile eşleştirerek detaylarını ekle
        let detailedProducts = account.products.map(p => {
            const productInfo = productsData.find(prod => prod.id === p.productId);
            // Eğer productInfo bulunamazsa, yine de count'u döndür
            return {
                // productInfo varsa, onun tüm özelliklerini al (id, name, level_required, image_url)
                ...(productInfo || {}), // productInfo null/undefined ise boş obje kullan
                // MongoDB'den gelen _id'yi de ekle, bu frontend'de key olarak kullanılacak
                _id: p._id, // MongoDB'deki alt dökümanın _id'si
                productId: p.productId, // Ürünün Hay Day ID'si
                count: p.count // Hesaptaki ürün adedi
            };
        });

        // Frontend'de level_required'a göre filtreleme yapıldığı için bu kısım backend'de kaldırıldı
        // if (maxLevel) {
        //     const max = parseInt(maxLevel);
        //     detailedProducts = detailedProducts.filter(p => Number(p.level_required) <= max);
        // }

        res.status(200).json(detailedProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching account products', error });
    }
};


// Add or update a product for an account
const AddProductToAccount = async (req, res) => {
    const { id } = req.params;
    const { productId, count } = req.body; // 'count' artık yeni toplam adet olarak kabul ediliyor

    try {
        const account = await Account.findById(id);
        if (!account) return res.status(404).json({ message: 'Account not found' });

        const existingProductIndex = account.products.findIndex(p => p.productId === productId);

        if (existingProductIndex !== -1) {
            // Ürün zaten varsa, adetini doğrudan 'count' değerine ayarla
            account.products[existingProductIndex].count = count;
        } else {
            // Ürün yoksa, yeni ürün olarak ekle
            account.products.push({ productId, count });
        }

        await account.save();
        res.status(200).json({ message: 'Product updated successfully', products: account.products });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product in account', error });
    }
};

// Remove a product from an account
const RemoveProductFromAccount = async (req, res) => {
    const { id, productId } = req.params; // productId, Hay Day item ID'si

    try {
        const account = await Account.findById(id);
        if (!account) return res.status(404).json({ message: 'Account not found' });

        // productId'ye göre filtrele (Number'a çevirerek)
        account.products = account.products.filter(p => p.productId !== Number(productId));

        await account.save();
        res.status(200).json({ message: 'Product removed from account', products: account.products });
    } catch (error) {
        res.status(500).json({ message: 'Error removing product', error });
    }
};

module.exports = {
    GetAcounnts,
    GetAccountById,
    CreateAccount,
    DeleteAccount,
    UpdateAccount,
    GetAccountProducts,
    AddProductToAccount,
    RemoveProductFromAccount
};