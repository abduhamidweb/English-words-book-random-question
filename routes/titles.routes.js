import express from 'express';
import TitleController from '../controllers/titles.contr.js';
const router = express.Router();

// Barcha titrlarni ko'rish
router.get('/titles', TitleController.getAllTitles);

// Yangi title qo'shish
router.post('/titles', TitleController.createTitle);

// Title ma'lumotlarini ko'rish
router.get('/titles/:id', TitleController.getTitle);

// Title ma'lumotlarini o'zgartirish
router.patch('/titles/:id', TitleController.updateTitle);

// Titleni o'chirish
router.delete('/titles/:id', TitleController.deleteTitle);

export default router;