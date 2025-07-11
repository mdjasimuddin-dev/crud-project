const ProductsModel = require('../models/productModels')

// create Product
exports.createProduct = async (req, res) => {
    const reqBody = req.body
    try {
        const product = await ProductsModel.create(reqBody);
        res.status(201).json({ status: 'success', data: product });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
}


// Read All Product
exports.getProducts = async (req, res) => {
    try {
        const product = await ProductsModel.find();
        res.status(200).json({ status: 'success', data: product });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
}




// Read Single Product by ID
exports.getProductById = async (req, res) => {
    let id = req.params.id;
    try {
        const product = await ProductsModel.findById(id);
        if (!product) {
            return res.status(404).json({ status: 'fail', message: 'Product not found' });
        }
        res.status(200).json({ status: 'success', data: product });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
};




// Update Product
exports.updateProduct = async (req, res) => {
    let id = req.params.id;
    let reqBody = req.body;
    try {
        const updated = await ProductsModel.findByIdAndUpdate(id, reqBody, {
            new: true,
            runValidators: true,
        });
        if (!updated) {
            return res.status(404).json({ status: 'fail', message: 'Product not found' });
        }
        res.status(200).json({ status: 'success', data: updated });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
};





// Delete Product
exports.deleteProduct = async (req, res) => {
    let id = req.params.id;
    try {
        const deleted = await ProductsModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ status: 'fail', message: 'Product not found' });
        }
        res.status(200).json({ status: 'success', message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'fail', error: error.message });
    }
};