import express from 'express';
import commentsController from '../controllers/comments.contr.js';

const router = express.Router();
// Barcha so'zlar ro'yxati
router.get('/comments', commentsController.getAllcomments);

// Yangi so'z qo'shish
router.post('/comments', commentsController.createcomment);

// Ma'lum bir so'zni ko'rish
router.get('/comments/:id', commentsController.getcomment);

// Ma'lum bir so'zni yangilash
router.patch('/comments/:id', commentsController.updatecomment);

// Ma'lum bir so'zni o'chirish
router.delete('/comments/:id', commentsController.deletecomment);

export default router;