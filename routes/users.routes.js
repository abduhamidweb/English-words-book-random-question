import express from 'express';
import UsersController from '../controllers/users.contr.js';

const router = express.Router();
// Barcha so'zlar ro'yxati
router.get('/users', UsersController.getAllusers);

// Yangi so'z qo'shish
router.post('/users', UsersController.createuser);

// Ma'lum bir so'zni ko'rish
router.get('/users:id', UsersController.getuser);

// Ma'lum bir so'zni yangilash
router.patch('/users:id', UsersController.updateuser);

// Ma'lum bir so'zni o'chirish
router.delete('/users:id', UsersController.deleteuser);

export default router;