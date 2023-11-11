import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PersonInfo = () => {
  const [people, setPeople] = useState([])
  const [items, setItems] = useState([])

  // const { id } = useParams()

  useEffect(() => {
    const fetchItems = async () => {
      // const response = await fetch(`/api/getItems/${id}`)
      const response = await fetch('/api/getItems/654b86bddb679e2c15cee776')
      // const response = await fetch('/api/getItems')
      const data = await response.json()

      if (response.ok) {
        setItems(data)
        
      } else {
        throw new Error("couldn't get items")
      }
    }

    // const fetchPeople = async () => {
    //   const response = await fetch('/api/getPeople')
    // }

    fetchItems()
    
  }, [])

  console.log(items)


  return (
    <div>
      This is the Person Info Page
      <div>
        {items.map(item => (
          <div>{item.name}</div>
        ))}
        
      </div>
    </div>
  )
}
export default PersonInfo