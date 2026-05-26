"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MessageTable from '../components/MessageTable';

const API_URL = 'https://script.google.com/macros/s/AKfycbzBn3sALe1rYjz7Ze-Ik7q9TEVP0I2V3XX7GNcecWP8NvCzGt4yO_RT1OlQp09TE9cU/exec';

function FilterableMessageTable({ messages }) {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />
      <MessageTable
        messages={messages}
        filterText={filterText}
      />
    </div>
  );
}

export default function Home() {
  const [blogMessages, setBlogMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.text())          // pega como texto bruto
      .then((text) => {
        const data = JSON.parse(text);              // parse manual garante UTF-8
        setBlogMessages(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao carregar mensagens.');
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', margin: '20px', padding: '0' }}>
      <h4 style={{ textAlign: 'center' }}>Procure uma mensagem:</h4>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <FilterableMessageTable messages={blogMessages} />
      )}
    </main>
  );
}