import { Routes, Route } from 'react-router-dom'
import Devs from './pages/devs'
import Update from './pages/update'
import View from './pages/view'
import NewDev from './pages/New'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Devs/>} exact />
      <Route path='/update' element={<Update/>} />
      <Route path='/view' element={<View/>} />
      <Route path='/add' element={<NewDev/>} />
    </Routes>
  )

}

export default App