
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/auth/auth'
import { Login } from './pages/auth/login'
import { Signup } from './pages/auth/signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth'>
<Route index element={<Auth />} />
<Route path='login' element={<Login />} />
<Route path='signup' element={<Signup />} />
          </Route>
          <Route></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
