import axios from "axios"
import { useEffect, useState } from "react"
import "./HomePage.css"
import Cards from "./Cards.jsx"

export default function HomePage() {
  // const [properties, setProperties] = useState([]) // source of truth
  const [suburb, setSuburb] = useState("")

  // const deleteNote = id => {
  //   setNotes(notes.filter(n => n.id !== id))
  // }

  // const updateNote = newNote => {
  //   setNotes(
  //     notes.map(n => {
  //       if (n.id === newNote.id) {
  //         return { ...n, ...newNote }
  //       } else {
  //         return n
  //       }
  //     })
  //   )
  // }
  const handleSubmit = e => {
    e.preventDefault()

    // if
  }

  const handleChange = e => {
    setSuburb(e.target.value)
  }

  // useEffect(() => {
  //   fetch("/home")
  //     .then(res => res.json())
  //     .then(setProperties)
  // }, [])

  return (
    <main>
      <h1>home page</h1>

      <form action="">
        <input type="text" value={suburb} onChange={handleChange} />
        <button onSubmit={handleSubmit}>Buy</button>
      </form>
      <section className="cards-wrapper">
        <Cards />
      </section>
    </main>
  )
}
