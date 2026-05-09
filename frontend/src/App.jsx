
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import  Login  from './components/Login'
import Register from './components/Register'
import Home from './Pages/Home'
import Results from './Pages/Results'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './Pages/About'

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/regsiter' element={<Register/>}></Route>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/result/:rollno' element={<Results/>}></Route>
       <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
