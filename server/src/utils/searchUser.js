import { Sequelize } from 'sequelize';
import User from '../models/user.js'
const findUser = async(id) => {
    const user = await User.findOne({
        where: {
            id
        }
    })

    return user
}
export default findUser;