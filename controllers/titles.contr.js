import Title from '../schemas/titles.schema.js';
import booksSchema from '../schemas/books.schema.js';
class TitleController {
    // Barcha titrlarni ko'rish
    async getAllTitles(req, res) {
        try {
            const titles = await Title.find().populate('book_id');
            res.status(200).json(titles);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
    // Yangi title qo'shish
    async createTitle(req, res) {
        const title = req.body;
        const newTitle = new Title(title);
        try {
            await booksSchema.findByIdAndUpdate(title.book_id, {
                $push: {
                    titles: newTitle._id
                }
            })
            await newTitle.save();
            res.status(201).json(newTitle);
        } catch (error) {
            res.status(409).json({
                message: error.message
            });
        }
    }

    // Title ma'lumotlarini ko'rish
    async getTitle(req, res) {
        const {
            id
        } = req.params;
        try {
            const title = await Title.findById(id).populate('words');
            res.status(200).json(title);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

    // Title ma'lumotlarini o'zgartirish
    async updateTitle(req, res) {
        const {
            id
        } = req.params;
        const {
            title_name,
            title_description,
            voice
        } = req.body;
        try {
            const updatedTitle = await Title.findByIdAndUpdate(
                id, {
                    title_name,
                    title_description,
                    voice
                }, {
                    new: true
                }
            );
            res.status(200).json(updatedTitle);
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

    // Titleni o'chirish
    async deleteTitle(req, res) {
        const {
            id
        } = req.params;
        try {
            await Title.findByIdAndRemove(id);
            res.status(200).json({
                message: 'Title deleted successfully.'
            });
        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
}

export default new TitleController();