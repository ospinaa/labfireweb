import { signOut } from "firebase/auth"
import { auth } from "../Firebase/config"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import styles from "./Profile.module.css"
 
const Profile = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
 
  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {user?.email?.charAt(0).toUpperCase()}
        </div>
 
        <h1 className={styles.title}>Mi Perfil</h1>
 
        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>✉ Correo</span>
            <span className={styles.infoValue}>{user?.email}</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>⬡ UID</span>
            <span className={styles.infoValueMono}>{user?.uid}</span>
          </div>
        </div>
 
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
 
export default Profile