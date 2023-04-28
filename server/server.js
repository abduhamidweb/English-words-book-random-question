import express from "express";
import "../utils/mongo.js";
import dotenv from "dotenv";
dotenv.config();
import booksRoutes from '../routes/books.routes.js';
import titlesRoutes from "../routes/titles.routes.js"
import wordsRoutes from "../routes/words.routes.js"
import usersRoutes from "../routes/users.routes.js"
import commentsRoutes from "../routes/comments.routes.js"
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/api', booksRoutes);
app.use('/api', titlesRoutes);
app.use('/api', wordsRoutes);
app.use('/api', usersRoutes);
app.use('/api', commentsRoutes);
app.listen(PORT, () => {
    console.log("Service listening on port " + PORT);
});