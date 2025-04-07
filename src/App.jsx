import {useState, useEffect, useRef} from 'react'
import Container from "./Container";

const App = () => {

  const list = [
    {
      title: "Hello",
      desc: "World"
    },
    {
      title: "Hello2",
      desc: "World2"
    },
  ]

  const [count, setCount] = useState(1)
  const [text, setText] = useState('')
  const formDOM = useRef(null)

  useEffect(() => {
    console.log('useEffect')
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
    {list.map((item, index) => (
      <Container key={index} title={item.title} desc={item.desc}></Container>
    ))}

    <h1>Count : {count}</h1>
    <button onClick={handleClick}>Klik</button>

    <form ref={formDOM} action="" style={{ marginTop: 24}} onSubmit={(e) => {
      e.preventDefault()
      console.log("submit")
      console.log(e.target.username.value)
    }}>
      <input type="text" name='username'/>
      <button type='submit'>submit</button>
    </form>
    <br />
    <br />
    <br />

    <input type="text" placeholder='onChange' value={text} onChange={(e) => {
      console.log("change", e.target.value)
      setText(e.target.value)
    }}/> 
    <button onClick={() => {
      setText('')
    }}>Reset</button>
    <p>{text}</p>
    </>
  )
}

export default App;