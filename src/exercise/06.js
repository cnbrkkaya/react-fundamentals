// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [name, setName] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }
  function handleChange(event) {
    const {value} = event.target
    setName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={name}
          onChange={handleChange}
          id="usernameInput"
          type="text"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
