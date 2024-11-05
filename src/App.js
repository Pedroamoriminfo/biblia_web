import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('/biblia/v1/books');
        const data = await response.json();
        setLivros(data.data);
      } catch (error) {
        console.error('Erro ao carregar os livros:', error);
      }
    };

    fetchLivros();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Lista de Livros</h1>
      <br />
      <div className="row">
        {livros.map(livro => (
          <div key={livro.liv_id} className="col-md-4 card">
            <Link to={`/book/${livro.liv_id}`} className="text-center d-block">
              {livro.liv_nome}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
