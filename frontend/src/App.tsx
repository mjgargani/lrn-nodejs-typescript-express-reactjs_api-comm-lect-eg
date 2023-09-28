import { useEffect, useState } from 'react'
import './App.css'

interface IContacts {
  id: string,
  nome: string,
  endereco: string,
  telefone1: string,
  telefone2: string
}

function App() {
  const [contacts, setContacts] = useState<IContacts[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/contacts', {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => setContacts(json))
  }, [])

  return (
    <>
      <div className='icon'>
        📒
      </div>
      <h1>Contatos</h1>
      <div className="card">
        <ul>
          {contacts.length ? contacts.map(el => (
            <li>
              <p><strong>{el.nome}</strong></p>
              <ul>
                <li>{el.endereco}</li>
                <li>{el.telefone1}</li>
                <li>{el.telefone2}</li>
              </ul>
            </li>
          )) : <p>⚠️ Os contatos não puderam ser carregados</p>}
        </ul>
      </div>
    </>
  )
}

export default App
