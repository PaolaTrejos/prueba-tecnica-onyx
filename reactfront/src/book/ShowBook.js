import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/books'

const CompShowBooks = () => {
    const [books, setBook] = useState([])
    useEffect( () => {
        getBooks()
    },[])

    const getBooks = async () => {
        const res = await axios.get(URI)
        setBook(res.data)
    }

    const deleteBook = async (id) => {
        await axios.delete(`${URI}/${id}`)
        getBooks()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col' style={{width:"1000px", position:"absolute", top:"50%", left:"50%", transform:"translate(-49%, -49%)"}}>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className="table table-hover" style={{textAlign: "left"}} >
                        <thead className='table-primary'>
                            <tr className='table-header-row'>
                                <th style={{backgroundColor: "#B197FC"}}>Titulo</th>
                                <th style={{backgroundColor: "#B197FC"}}>Autor</th>
                                <th style={{backgroundColor: "#B197FC"}}>Fecha de publicación</th>
                                <th style={{backgroundColor: "#B197FC"}}>Genero</th>
                                <th style={{backgroundColor: "#B197FC"}}>Aciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { books.map ( (book) => (
                                <tr key={ book.id }>
                                    <td style={{fontWeight:"500"}}> { book.title } </td>
                                    <td> { book.author } </td>
                                    <td> { book.publicationYear } </td>
                                    <td> { book.genre } </td>
                                    <td>
                                        <Link to={`/edit/${book.id}`} className='btn btn-info' style={{marginRight:"4px"}}><i className="fa-regular fa-pen-to-square"  style={{color: "#ffff"}}></i></Link>
                                        <button onClick={ () => deleteBook(book.id)} className='btn btn-danger' style={{marginLeft:"4px"}}><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBooks