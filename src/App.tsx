import { useState } from 'react'
import './App.css'
import { TrendingUp, Users, DollarSign, Plus, Settings, BarChart3 } from "lucide-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <div className='logo'><img src="src\assets\subvest-logo.png" alt="subvest logo" /></div>
      <nav>
        <div>Features</div>
        <div>Pricing</div>
        <div>Login</div>
        <button>Get Started</button>
      </nav>
     
    </header>
  )
}

export default App
