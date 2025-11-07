import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  UserCog, 
  CheckCircle,
  Microscope
} from 'lucide-react'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const menuItems = [
    { path: '/patients', label: 'Patients', icon: Users },
    { path: '/rendez-vous', label: 'Rendez-vous', icon: Calendar },
    { path: '/resultats', label: 'Résultats', icon: FileText },
    { path: '/automates', label: 'Automates', icon: Activity },
    { path: '/personnel', label: 'Personnel', icon: UserCog },
    { path: '/validation', label: 'Validation', icon: CheckCircle },
  ]

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Microscope size={32} className="logo-icon" />
          <h1 className="app-title">Easy-SIL</h1>
          <p className="app-subtitle">Laboratoire médical</p>
        </div>
        <nav className="nav-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">A</div>
            <div>
              <div className="user-name">Administrateur</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

