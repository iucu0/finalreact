import React, { useState } from 'react';

export default function CreateBook({ addBook }) {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || author === '') {
      alert('Por favor rellena los campos');
      return;
    }

    addBook(title, author);

    setTitle('');
    setAuthor('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <label htmlFor='title'>Título</label>
        <input maxLength={25} type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='row'>
        <label htmlFor='author'>Autor</label>
        <input maxLength={25} type='text' id='author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </div>
      <div className='row-button'>
        <button className='btn' type='submit'>Añadir</button>
      </div>
    </form>
  )
}