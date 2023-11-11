import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PersonInfo from './pages/PersonInfo'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/:id"
            element={<PersonInfo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App