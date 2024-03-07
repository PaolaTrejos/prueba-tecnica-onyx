import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CompShowBooks from './book/ShowBook';
import CompCreateBook from './book/CreateBook';
import CompEditBook from './book/EditBook';

function App() {
  return (
    <div className="App">
      <h1>Prueba Técnica Onyx - Liceth Paola Trejos</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBooks /> } />
          <Route path='/create' element={ <CompCreateBook /> } />
          <Route path='/edit/:id' element={ <CompEditBook /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
