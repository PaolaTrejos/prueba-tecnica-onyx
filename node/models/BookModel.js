import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BookModel = db.define('books', {
    title: { type: DataTypes.STRING },
    author: { type: DataTypes.STRING },
    publicationYear: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
})

export default BookModel