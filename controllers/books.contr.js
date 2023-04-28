import booksSchema from "../schemas/books.schema.js";
class booksController {
    // CRUD operatsiyalari
    static async createbook(req, res) {
        try {
            const {
                book_title
            } = req.body;

            const book = new booksSchema({
                book_title
            });
            await book.save();
            res.status(201).send({
                data: book,
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
    static async getbooks(req, res) {
        try {
            const books = await booksSchema.find({},{titles:0, __v:0})
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    static async getbookById(req, res) {
        try {
            const book = await booksSchema.findById(req.params.id).populate('titles');
            if (!book) {
                return res.status(404).json({
                    message: 'book not found'
                });
            }
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    static async updatebook(req, res) {
        try {
            const {
                book_title
            } = req.body;

            const book = await booksSchema.findById(req.params.id);

            if (!book) {
                return res.status(404).json({
                    message: 'book not found'
                });
            } else {
                book.book_title = book_title ? book_title : book.book_title;
                await book.save();
            }

            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    static async deletebook(req, res) {
        try {
            const book = await booksSchema.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({
                    message: 'book not found'
                });
            }
            await book.save();

            res.status(204).json({
                message: 'book deleted'
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

export default booksController;