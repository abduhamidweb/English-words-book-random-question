import usersSchema from '../schemas/users.schema.js';
import {
    JWT
} from './../utils/jwt.js';
class userController {
    // Barcha titrlarni ko'rish
    async getAllusers(req, res) {
        try {
            const users = await usersSchema.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
    // Yangi user qo'shish
    async createuser(req, res) {
        const user = req.body;
        const newuser = new usersSchema(user);
        try {


            // await usersSchema.findByIdAndUpdate(user.book_id, {
            //     $push: {
            //         users: newuser._id
            //     }
            // })
            await newuser.save();
            res.status(201).json({
                data: newuser,
                token: JWT.SIGN({
                    id: newuser._id
                })
            });
        } catch (error) {
            res.status(409).json({
                message: error.message
            });
        }
    }

    // user ma'lumotlarini ko'rish
    async getuser(req, res) {
        const {
            id
        } = req.params;
        try {
            const user = await user.findById(id).populate('words');
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

    // user ma'lumotlarini o'zgartirish
    async updateuser(req, res) {
        const {
            id
        } = req.params;
        const {
            user_name,
            user_description,
            voice
        } = req.body;
        try {
            const updateduser = await user.findByIdAndUpdate(
                id, {
                    user_name,
                    user_description,
                    voice
                }, {
                    new: true
                }
            );
            res.status(200).json(updateduser);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

    // userni o'chirish
    async deleteuser(req, res) {
        const {
            id
        } = req.params;
        try {
            await user.findByIdAndRemove(id);
            res.status(200).json({
                message: 'user deleted successfully.'
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
}

export default new userController();