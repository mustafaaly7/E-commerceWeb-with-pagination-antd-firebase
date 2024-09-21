
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/auth/auth'
import { Login } from './pages/auth/login'
import { Signup } from './pages/auth/signup'
import { Dashboard } from './components/dashboard'
import { Home } from './pages/home'
import { Products } from './pages/products'
import { Orders } from './pages/orders'
import { ProductDetail } from './pages/ProductDetail'
import { Profile } from './pages/profile'
import { NotFound } from './pages/notFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          //Pages without Header (Only Login and Signup And Auth)
          <Route path='/auth'>
            <Route index element={<Auth />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>


// components and pages that contains header now 

          <Route path='/' element={<Dashboard />}>
          //the upper route contain element that has both header and footer in there and this page
            <Route index element={<Home />} />

            <Route path='products' element={<Products />} />
            <Route path='orders' element={< Orders />} />
            <Route path='/product/id/:id' element={< ProductDetail />} />
            <Route path='profile/:username' element={<Profile />} />

          </Route>
<Route path='*'  element={<NotFound/>} />




        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
