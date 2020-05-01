import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const inputChanged = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const newPersons = persons.concat([{name: newName, id: persons.length + 1}])

    setPersons(newPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={inputChanged}/>
        </div>
        <div>
          <button type="submit" onClick={addName} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map( person =>
        <li key={person.id} > {person.name} </li>
      )}
      </ul>
    </div>
  )
}

export default App
