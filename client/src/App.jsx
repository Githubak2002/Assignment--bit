import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Error404 from './pages/Error404'

import  { Toaster } from 'react-hot-toast';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>

    <main className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>

      <Toaster />
    </main>

    </UserContextProvider>
  )
}

export default App
