const express = require('express');
const router = express.Router();
const {
    GetAcounnts,
    GetAccountById,
    CreateAccount,
    DeleteAccount,
    UpdateAccount,
    GetAccountProducts,
    AddProductToAccount,
    RemoveProductFromAccount
} = require('../controllers/accountController');

// Account CRUD
router.get('/', GetAcounnts);
router.get('/:id', GetAccountById);
router.post('/', CreateAccount);
router.delete('/:id', DeleteAccount);
router.put('/:id', UpdateAccount);

// Product in Account
router.get('/:id/products', GetAccountProducts);
router.post('/:id/products', AddProductToAccount);
router.delete('/:id/products/:productId', RemoveProductFromAccount);

module.exports = router;
