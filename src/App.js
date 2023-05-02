import "./App.css"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
      </nav>
      {/* <LoginPage />
      <HomePage /> */}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
