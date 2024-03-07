import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/books/'

const CompCreateBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publicationYear, setPublicationYear] = useState('')
    const [genre, setGenre] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()

        if (!title || !author || !publicationYear || !genre) {
            alert("Por favor diligencia todos los campos antes de guardar.")
            return
        }

        axios.post(URI, {title: title, author: author, publicationYear: publicationYear, genre: genre})
        navigate('/')
    }

    const cancel = () => {
        navigate('/')
    }

    return (
        <div>
            <h3>Crear Libro</h3>
            <form onSubmit={store} style={{width:"700px", position:"absolute", top:"50%", left:"50%", transform:"translate(-49%, -49%)"}}>
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
                <button type="submit" className="btn btn-primary" style={{marginRight:"10px"}}>Guardar</button>
                <button type="button" className="btn btn-secondary" onClick={cancel} style={{marginLeft:"10px"}}>Cancelar</button>
            </form>
        </div>
    )
}

export default CompCreateBook