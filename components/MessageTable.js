import React from 'react';

function MessageRow({ message }) {
  const [texto, autor, dataISO] = message;

  const dataFormatada = new Date(dataISO).toLocaleDateString('pt-BR');

  return (
    <tr>
      <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{autor}</td>
      <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{texto}</td>
      <td style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>{dataFormatada}</td>
    </tr>
  );
}

function MessageTable({ messages, filterText }) {
  const filteredMessages = messages.filter(([texto, autor]) => {
    const busca = filterText.toLowerCase();
    return (
      texto.toLowerCase().includes(busca) ||
      autor.toLowerCase().includes(busca)
    );
  });

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ backgroundColor: '#f0f0f0' }}>
          <th style={{ padding: '8px', textAlign: 'left' }}>Autor</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Mensagem</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Data</th>
        </tr>
      </thead>
      <tbody>
        {filteredMessages.length === 0 ? (
          <tr>
            <td colSpan="3" style={{ padding: '16px', textAlign: 'center' }}>
              Nenhuma mensagem encontrada.
            </td>
          </tr>
        ) : (
          filteredMessages.map((message, index) => (
            <MessageRow key={index} message={message} />
          ))
        )}
      </tbody>
    </table>
  );
}

export default MessageTable;