import React, { useState } from "react"
import * as C from './styles.js'
import data from './data/data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSumit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count < 0) {
      amount = 1
    }
    if(count > 8){
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  return (
    <C.Section>
      <h3>Text generator</h3>
      <C.Form onSubmit={handleSumit}>
        <C.Label htmlFor='amount'>paragraphs:</C.Label>
        <C.Input
        type="number"
        name="amount"
        id="amount"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        ></C.Input>
        <C.Button className='btn'>generate</C.Button>
      </C.Form>
      <C.LoremIpsumText>
        {
          text.map((text, index) => {
            return <p key={index}>{text}</p>
          })
        }
      </C.LoremIpsumText>
    </C.Section>
  )
}

export default App
