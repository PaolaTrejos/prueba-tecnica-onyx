import express  from "express";
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/BookController.js";

const router = express.Router()

router.get('/', getAllBooks)
router.get('/:id', getBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router