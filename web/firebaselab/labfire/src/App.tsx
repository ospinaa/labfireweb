import { Routes, Route, Navigate } from "react-router-dom"
import Signup from "./register/Signup"
import Login from "./register/Login"
import Profile from "./register/Profile"
import ProtectedRoute from "./routes/ProtectedRoute"
 
function App() {
  return (
    <Routes>
      {/* Redirige la raíz al login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
 
      {/* Rutas públicas */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
 
      {/* Ruta protegida */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
 
export default App