import { Sequelize } from 'sequelize'
import db from '../config/db.js'

const { DataTypes } = Sequelize;
const Products = db.define('upload_db', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
}, {
    freezeTableName: true
})
export default Products;
(async() => {
    await db.sync();
})()