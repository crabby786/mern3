import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserTable from './pages/user'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserTable />
    </>
  )
}

export default App
