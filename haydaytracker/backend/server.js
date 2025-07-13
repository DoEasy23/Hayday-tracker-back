const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI 
// Middleware
app.use(express.json());
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
    }
);

const accountRoutes = require('./routes/accountRoutes');
app.use('/api/accounts', accountRoutes);
const productListRoutes = require('./routes/productListRoutes');
app.use('/api/products', productListRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
