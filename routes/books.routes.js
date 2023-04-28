import {
    Router
} from 'express';
import bookController from '../controllers/books.contr.js';

const router = Router();

// Get all books
router.get('/books', bookController.getbooks);

// Get a single book
router.get('/books/:id', bookController.getbookById);

// Create a new book
router.post('/books', bookController.createbook);

// Update an existing book
router.put('/books/:id', bookController.updatebook);

// Delete a book
router.delete('/books/:id', bookController.deletebook);

export default router;