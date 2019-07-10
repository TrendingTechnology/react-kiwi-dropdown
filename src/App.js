import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import './prism.css'
import { example_1 } from './example_1'
import Dropdown from 'react-kiwi-dropdown'
import logo from './images/icons8-kiwi-80.png'

const options = [
  { value: 'kiwi', content: '🥝' },
  { value: 'banana', content: '🍌' },
  { value: 'pineapple', content: '🍍' }
]

const fruitBaskets = [
  { type: 'kiwi', text: 'Basket with 🥝' },
  { type: 'banana', text: 'Basket with 🍌' },
  { type: 'pineapple', text: 'Basket with 🍍' },
  { type: 'kiwi', text: 'Basket with 🥝' },
  { type: 'banana', text: 'Basket with 🍌' },
  { type: 'pineapple', text: 'Basket with 🍍' }
]

function App() {
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const onChange = selectedOption => {
    setSelectedOption(selectedOption)
  }

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <header style={{ display: 'flex', alignItems: 'baseline' }}>
        <img alt="icons8-kiwi-80.png" src={logo} />
        <h1>react-kiwi-dropdown</h1>
      </header>

      <h2>Example #1</h2>
      <section style={{ display: 'flex' }}>
        <aside style={{ marginRight: '40px' }}>
          <Dropdown
            options={options}
            onChange={onChange}
            buttonIndicator
            selectedOption={selectedOption}
          />
        </aside>
        <main>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {fruitBaskets.map((basket, i) => (
              <li
                key={i}
                style={{
                  fontWeight: selectedOption === basket.type ? 'bold' : 'normal'
                }}
              >
                {basket.text}
              </li>
            ))}
          </ul>
        </main>
      </section>
      <pre>
        <code className="language-javascript">{example_1}</code>
      </pre>
    </div>
  )
}

export default App
