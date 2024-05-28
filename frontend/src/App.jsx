import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageBanner from './components/HomePageBanner/HomePageBanner.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 > 😀 </h1>
      <HomePageBanner></HomePageBanner>
    </>
  )
}

export default App
