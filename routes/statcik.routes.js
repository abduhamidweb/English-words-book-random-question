import express from "express";
const router = express.Router();
const BASE_URL = 'https://englishwordsplaygame.onrender.com/api/'
router.get('/', (req, res) => {
    res.send({
        message: "bu kitoblar web saytining backend qismi hisoblanadi. bu yerda asosan inglizcha so'zlarni kiritib u bilan mashq qilasiz yoki ko'pgina o'yinlar yasashingiz mumkun",
        routes: [{
                books: BASE_URL + 'books'
            },
            {
                bookById: BASE_URL + 'books/Id'
            },
            {
                titles: BASE_URL + 'titles'
            }, {
                titleById: BASE_URL + 'titles/Id'
            }, {
                words: BASE_URL + 'words'
            }, {
                wordsById: BASE_URL + 'words/Id'
            }, {
                users: BASE_URL + 'users'
            }, {
                usersById: BASE_URL + 'users/Id'
            },
            {
                comments: BASE_URL + 'comments'
            }, {
                commentById: BASE_URL + 'comments/Id'
            },
        ]
    })
});
export default router;