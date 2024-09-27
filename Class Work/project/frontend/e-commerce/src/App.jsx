import Intro from "./components/Intro";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Intro/>
    </>
  )
}

export default App
