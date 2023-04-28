import express from 'express';
import WordController from '../controllers/words.contr.js';

const router = express.Router();
// Barcha so'zlar ro'yxati
router.get('/words', WordController.getAllWords);

// Yangi so'z qo'shish
router.post('/words', WordController.createWord);

// Ma'lum bir so'zni ko'rish
router.get('/words/:id', WordController.getWord);

// Ma'lum bir so'zni yangilash
router.patch('/words/:id', WordController.updateWord);

// Ma'lum bir so'zni o'chirish
router.delete('/words/:id', WordController.deleteWord);

export default router;