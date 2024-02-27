import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';


function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (title, author) => {
    const newBook = { title, author };
    setBooks([...books, newBook]);
  };

  return (
    <div className='container'>
      <h1>Formulario</h1>
      <Form addBook={handleAddBook}/>
      <h1>Tabla</h1>
      <Table books={books} />
    </div>
  );
};

export default App;