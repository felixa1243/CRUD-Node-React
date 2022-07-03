import Product from '../models/products.js';
import path from 'path';
import fs from 'fs'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
export const getProducts = async(req, res) => {
    try {
        const response = await Product.findAll();
        res.json({
            response
        })
    } catch (err) {
        console.log(err.message)
    }
}
export const getProductsbyId = async(req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(response)
    } catch (err) {
        console.log(err.message)
    }
}
export const saveProducts = async(req, res) => {
    if (req.files === null) return status(400).json({
        error: {
            message: "file is required!"
        }
    });
    const name = req.body.title;
    const file = req.files.file;
    const filesize = file.data.length;
    const ext = path.extname(file.name);
    const filename = file.md5 + ext;
    const url = `${req.protocol}://${req.get('host')}/images/${filename}`
    const permitted = [
        '.jpg', '.png'
    ];
    if (!permitted.includes(ext)) return status(422).json({
        error: {
            message: "file extension not permitted allowed type: " + permitted.join(',')
        }
    });
    if (filesize > 5e6) return status(422).json({
        error: {
            message: "file size too big allowed size:" + (5e6 / 10) + 'mb'
        }
    })
    file.mv(`./public/images/${filename}`, async err => {
        if (err) res.status(500).json({
            error: {
                message: err.message
            }
        })
        try {
            await Product.create({
                name: name,
                image: filename,
                url
            })
            res.status(201).json({
                success: true,
                message: "success add a data"
            })
        } catch (err) {
            console.log(err)
        }
    })
}

export const editProducts = async(req, res) => {
    const user = await Product.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!user) return res.status(404).json({
        error: {
            message: "not found"
        }
    })
    let filename = '';
    if (req.files === null) filename = Product.image;
    else {

        const file = req.files.file;
        const filesize = file.data.length;
        const ext = path.extname(file.name);
        const filename = file.md5 + ext;

        const permitted = [
            '.jpg', '.png'
        ];
        if (!permitted.includes(ext)) return status(422).json({
            error: {
                message: "file extension not permitted allowed type: " + permitted.join(',')
            }
        });
        if (filesize > 5e6) return status(422).json({
            error: {
                message: "file size too big allowed size:" + (5e6 / 10) + 'mb'
            }
        })
        const filePath = './public/images/' + user.image
        fs.unlinkSync(filePath);
        file.mv(`./public/images/${filename}`, err => {
            if (err) res.status(500).json({
                error: {
                    message: err.message
                }
            })
        })

    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get('host')}/images/${filename}`

    try {
        await Product.update({
            name,
            image: filename,
            url
        }, {
            where: {
                id: req.params.id
            }

        })
        res.status(200).json({
            success: true,
            message: 'Edited successfully'
        })
    } catch (error) {
        console.log(error.message)
    }
}
export const deleteProducts = async(req, res) => {
    const user = await Product.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!user) return res.status(404).json({
        error: {
            message: "not found"
        }
    })
    try {
        const filePath = './public/images/' + user.image
        fs.unlinkSync(filePath);
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        })
    } catch (err) {
        console.log(err.message)
    }
}