import BookModel from "../models/BookModel.js";


export const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.findAll()
        res.json(books)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getBook = async (req, res) => {
    try {
        const book = await BookModel.findAll({
            where: {id:req.params.id}
        })
        res.json(book[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const createBook = async (req, res) => {
    try {
        await BookModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const updateBook = async (req, res) => {
    try {
        await BookModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const deleteBook = async (req, res) => {
    try {
        await BookModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}