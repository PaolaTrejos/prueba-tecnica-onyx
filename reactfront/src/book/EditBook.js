import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const URI = 'http://localhost:8000/books/'

const CompEditBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publicationYear, setPublicationYear] = useState('')
    const [genre, setGenre] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()

        if (!title || !author || !publicationYear || !genre) {
            alert("Por favor diligencia todos los campos antes de guardar los cambios.")
            return
        }

        await axios.put(URI+id, {
            title: title,
            author: author,
            publicationYear: publicationYear,
            genre: genre
        })
        navigate('/')
    }

    useEffect( () => {
        getBookById()
    },[])

    const getBookById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublicationYear(res.data.publicationYear)
        setGenre(res.data.genre)
    }

    return (
        <div>
            <h3>Editar Libro</h3>
            <form onSubmit={update} style={{width:"700px", position:"absolute", top:"50%", left:"50%", transform:"translate(-49%, -49%)"}}>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight:"500"}}>Titulo</label>
                    <input 
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight:"500"}}>Autor</label>
                    <input
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight:"500"}}>Año de publicación</label>
                    <input
                        value={publicationYear}
                        onChange={ (e) => setPublicationYear(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight:"500"}}>Genero</label>
                    <input
                        value={genre}
                        onChange={ (e) => setGenre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )

}

export default CompEditBook