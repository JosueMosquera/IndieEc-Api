const express = require('express')
const { dataSource } = require('../dbConfig/appDataSource')
const Product = require('../models/Product').Product
const router = express.Router()
router.get('/products', async (req, res) => {
    try {
        const products = await dataSource.getRepository(Product).find()
        res.json(products)
    } catch (error) {
        console.log(error)
    }
})
router.post('/products', async (req, res) => {
    try {
        const { name, code, price, stock,artistCatalogueId } = req.body
        const newProduct = dataSource.getRepository(Product).create(req.body)
        await dataSource.getRepository(Product).save({
            name, code, price, stock,artistCatalogueId

        })
        return res.json(newProduct)

    } catch (error) {
        console.log(error)
    }
})
router.put('/products/update', async (req, res) => {
    try {
        const { productId, name, code, price, stock,artistCatalogueId } = req.body
        const findProduct = dataSource.getRepository(Product).findOneBy({ id: productId })
        if (findProduct) {
            const updatedProduct = await dataSource.getRepository(Product).update({ id: productId }, {
                name, code, price, stock,artistCatalogueId
            })
            res.json(updatedProduct)
        }
        else {
            console.log('no se encontro el producto por el id que ingreso')
        }
    } catch (error) {
        console.log(error)
    }
})
router.delete('/products/delete', async (req, res) => {
    try {
        const { productId } = req.body
        const findProduct = dataSource.getRepository(Product).findOneBy({ id: productId })
        if (findProduct) {
            const deletedProduct = await dataSource.getRepository(Product).delete({ id: productId })
            res.json(deletedProduct)
        }
        else {
            console.log('no se encontro el producto por el id que ingreso')
        }
    } catch (error) {
        console.log(error)
    }
}
)
module.exports = router