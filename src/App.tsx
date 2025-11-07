import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Patients from './pages/Patients'
import Appointments from './pages/Appointments'
import Results from './pages/Results'
import Machines from './pages/Machines'
import Staff from './pages/Staff'
import Validation from './pages/Validation'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/patients" replace />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/rendez-vous" element={<Appointments />} />
          <Route path="/resultats" element={<Results />} />
          <Route path="/automates" element={<Machines />} />
          <Route path="/personnel" element={<Staff />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

