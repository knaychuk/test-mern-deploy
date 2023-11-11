import { useState, useEffect } from 'react'

const Home = () => {
  const [items, setItems] = useState(null)
  const [people, setPeople] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/getItems')
      const data = await response.json()

      if (response.ok) {
        setItems(data)
      }
    }

    const fetchPeople = async () => {
      const response = await fetch('/api/getPeople')
    }

    fetchItems()
  }, [])

  return (
    <div>
      {items && items.map(item => (
        <div>
          {item.name} {item.color}
        </div>
      ))}
    </div>
  )
}
export default Home