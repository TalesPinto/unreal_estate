import { useState, useEffect } from "react"
import { login as agentsLogin } from "../utils/agents_api"
import { Route, Redirect } from "react-router-dom"

export default function LoginPage() {
  // const [formData, setFormData] = useState({})
  // const [error, setError] = useState("")
  // const [propData, setPropData] = useState([])

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   if (formData.email && formData.password) {
  //     // ajax api call to /api/login
  //     agentsLogin(formData)
  //       .then(res => {
  //         console.log(res)
  //       })
  //       .catch(err => console.log(err))
  //   } else {
  //     setError("invalid email or password")
  //   }
  // }

  // const handleChange = e => {
  //   console.log(e.target.value)
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  //   console.log(formData)
  //   setError("")
  // }

  // useEffect(() => {
  //   fetch(`/login/${formData.id}`)
  //     .then(res => res.json())
  //     .then(data => setPropData(data))
  //     .then(res => console.log(res))
  // }, [formData])

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleFormSubmit(event) {
    event.preventDefault()

    // Make a request to the API to check the email and password
    return fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        // console.log(JSON.stringify({ email, password }))
        console.log(data)
        if (data.status == 400) {
          setIsLoggedIn(true)
          console.log("aloha")
        } else {
          alert("Incorrect email or password")
        }
      })
  }

  const handleSubmit = () => {
    return async (email, password) => {
      const res = await fetch(`/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        const data = await res.json()
        setEmail(data.email)
        setIsLoggedIn(true)
      } else {
        console.log(`Error when trying to login.`)
      }
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    console.log(password)
  }
  function handleEmailChange(event) {
    setEmail(event.target.value)
    console.log(email)
  }

  if (isLoggedIn) {
    return <h1>Welcome to the protected page!</h1>
  }
  return (
    <section>
      <h1>login</h1>
      {isLoggedIn ? (
        <h1>Welcome to the protected page!</h1>
      ) : (
        <h1>you are not logged in</h1>
      )}
      <form onSubmit={handleSubmit("login")} action="">
        <label htmlFor="">email</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <label htmlFor="">password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>login</button>
      </form>
    </section>
  )
}
