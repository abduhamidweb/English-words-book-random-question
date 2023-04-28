import titlesSchema from '../schemas/titles.schema.js';
import Word from '../schemas/words.schema.js';

class WordController {
    // Barcha so'zlar
    async getAllWords(req, res) {
        try {
            const words = await Word.find();
            res.status(200).json(words);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    // So'z qo'shish
    async createWord(req, res) {
        const word = req.body
        const newWord = new Word(word);
        try {
            await titlesSchema.findByIdAndUpdate(word.title_id, {
                $push: {
                    words: newWord._id
                }
            })
             await newWord.save();
             res.status(201).json(newWord);
        } catch (err) {
            res.status(409).json({
                message: err.message
            });
        }
    }

    // So'z ma'lumotlarini ko'rish
    async getWord(req, res) {
        try {
            const word = await Word.findById(req.params.id).populate('comments').populate('users');
            res.status(200).json(word);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    // So'zni o'zgartirish
    async updateWord(req, res) {
        try {
            const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            res.status(200).json(updatedWord);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    }

    // So'zni o'chirish
    async deleteWord(req, res) {
        try {
            await Word.findByIdAndRemove(req.params.id);
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

export default new WordController();