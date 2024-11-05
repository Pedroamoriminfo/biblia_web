// Book.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Book = () => {
  const [livro, setLivro] = useState([]);
  const { livroId } = useParams();

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await fetch(`/biblia/v1/books/${livroId}`);
        const data = await response.json();
        setLivro(data.data);
      } catch (error) {
        console.error('Erro ao carregar o livro:', error);
      }
    };

    fetchLivro();
  }, [livroId]);

  return (
    
    <div className="container">
 
 <h1 className="mt-5 text-center">Livro</h1>
      
      <br />
        <div className="row">
      {livro.map(livro => (
          <div className="col-md-12">
            <p className="text-left">{livro.ver_versiculo}{' - '}{livro.ver_texto}</p>
          </div>
     ))}
        </div>
    </div>
  );
};

export default Book;
