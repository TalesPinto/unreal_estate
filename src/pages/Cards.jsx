import { useEffect, useState } from "react"
import "./Cards.css"

export default function Cards() {
  const [properties, setProperties] = useState([]) // source of truth

  useEffect(() => {
    fetch("/home")
      .then(res => res.json())
      .then(setProperties)
  }, [])

  return (
    <div>
      <section className="card">
        {properties.map(property => (
          <div>
            <p>{property.id}</p>
            <p>{property.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
