import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 data-testid="count">Count: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        data-testid="increment-button"
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        data-testid="decrement-button"
      >
        Decrement
      </button>
    </div>
  )
}

export default App
