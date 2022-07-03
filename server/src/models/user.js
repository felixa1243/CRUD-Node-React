import { Sequelize } from 'sequelize'
import db from '../config/db.js'

const { DataTypes } = Sequelize;
const User = db.define('anggota', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
}, {
    freezeTableName: true
})
export default User;
(async() => {
    await db.sync();
})()