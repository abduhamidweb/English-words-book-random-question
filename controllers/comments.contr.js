import commentsSchema from '../schemas/comments.schema.js';
import comment from '../schemas/comments.schema.js';
import usersSchema from '../schemas/users.schema.js';
import wordsSchema from '../schemas/words.schema.js';
import {
    JWT
} from './../utils/jwt.js';

class commentController {
    // Barcha so'zlar
    async getAllcomments(req, res) {
        try {
            const comments = await comment.find();
            res.status(200).json(comments);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    // So'z qo'shish
    async createcomment(req, res) {
        const comment = req.body;
        const token = req.headers.token;
        if (!token) {
            return res.status(404).json({
                message: 'invalid token'
            });
        }
        const {
            _id
        } = await usersSchema.findById(JWT.VERIFY(token).id);
    
        if (!_id) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        const newcomment = new commentsSchema(comment);
        newcomment.user = _id;
        try {
            await wordsSchema.findByIdAndUpdate(comment.word, {
                $push: {
                    comments: newcomment._id
                }
            })
            await wordsSchema.findByIdAndUpdate(comment.word, {
                $push: {
                    users: _id
                }
            })
            await newcomment.save();
            res.status(201).json(newcomment);
        } catch (err) {
            res.status(409).json({
                message: err.message
            });
        }
    }

    // So'z ma'lumotlarini ko'rish
    async getcomment(req, res) {
        try {
            const comment = await commentsSchema.findById(req.params.id);
            res.status(200).json(comment);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    // So'zni o'zgartirish
    async updatecomment(req, res) {
        try {
            const updatedcomment = await commentsSchema.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            res.status(200).json(updatedcomment);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    // So'zni o'chirish
    async deletecomment(req, res) {
        try {
            await commentsSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({
                message: 'So\'z o\'chirildi'
            });
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }
}

export default new commentController();