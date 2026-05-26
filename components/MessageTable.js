import React from 'react';

function MessageRow({ message }) {
  const texto = String(message[0] ?? '');
  const autor = String(message[1] ?? '');
  const dataISO = String(message[2] ?? '').replace(/\s/g, '');

  const dataObj = new Date(dataISO);
  const dataFormatada = isNaN(dataObj)
    ? dataISO
    : dataObj.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

  return (
    <tr>
      <td style={{ padding: '8px', borderBottom: 'none' }}>{autor}</td>
      <td style={{ padding: '8px', borderBottom: 'none' }}>{texto}</td>
      <td style={{ padding: '8px', borderBottom: 'none' }}>{dataFormatada}</td>
    </tr>
  );
}

function MessageTable({ messages, filterText }) {
  const filteredMessages = messages.filter((message) => {
    if (!Array.isArray(message)) return false;

    const texto = String(message[0] ?? '');
    const autor = String(message[1] ?? '');
    const busca = filterText.toLowerCase();

    return (
      texto.toLowerCase().includes(busca) ||
      autor.toLowerCase().includes(busca)
    );
  });

  return (
    <table style={{ borderCollapse: 'collapse', width: '60%', margin: '0 auto' }}>
      <thead>
        <tr style={{ backgroundColor: '#0a0a0a' }}>
          <th style={{ padding: '8px', textAlign: 'left', color: 'white' }}>Autor</th>
          <th style={{ padding: '8px', textAlign: 'left', color: 'white' }}>Mensagem</th>
          <th style={{ padding: '8px', textAlign: 'left', color: 'white' }}>Data</th>
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