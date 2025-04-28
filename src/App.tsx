import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from  './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Overview from './pages/Overview'
import Appointment from './pages/Appointment'
import Chats from './pages/Chats'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Pathology from './pages/Pathology'
import Settings from './pages/Settings'
import Signup from './pages/Signup'
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Sidebar /> {/* Sidebar always visible */}
      <Header /> {/* Header always visible */}
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
