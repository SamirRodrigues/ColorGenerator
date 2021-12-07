import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [percent, setPercent] = useState(0)

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(parseInt(percent))
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <section className="container">
        <h3>color scale generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name=""
            id=""
            value={percent}
            onChange={e => setPercent(e.target.value)}
            className="number"
            placeholder="10"
          />
          <h5>Scale Percentage Variation</h5>
        </form>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          )
        })}
      </section>
    </>
  )
}

export default App
