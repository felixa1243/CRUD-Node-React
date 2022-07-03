import express from 'express'
import {
    getProducts,
    getProductsbyId,
    saveProducts,
    editProducts,
    deleteProducts
} from '../controllers/ProductCont.js'
const router = express.Router();
router.get('/', getProducts)
router.get('/:id', getProductsbyId)
router.post('/', saveProducts)
router.patch('/:id', editProducts)
router.delete('/:id', deleteProducts)

export default router;