import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import KpiOverview from './components/KpiOverview'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
    <Route path="kpi" element={<ProtectedRoute><KpiOverview/></ProtectedRoute>}/>
  </Routes>
)

export default App;
