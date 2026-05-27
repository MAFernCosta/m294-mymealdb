import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import MealDetails from './pages/MealDetails';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mealdetails/:mealid" element={<MealDetails />} />
        </Route>
      </Routes>

  )
}

export default App
