import { Routes, Route } from 'react-router-dom'
import Devs from './pages/devs'
import Update from './pages/update'
import View from './pages/view'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Devs/>} exact />
      <Route path='/update' element={<Update/>} />
      <Route path='/view' element={<View/>} />
    </Routes>
  )

}

export default App