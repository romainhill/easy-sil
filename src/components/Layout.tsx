import { ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  UserCog, 
  CheckCircle,
  Microscope,
  Menu,
  X
} from 'lucide-react'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { path: '/patients', label: 'Patients', icon: Users },
    { path: '/rendez-vous', label: 'Rendez-vous', icon: Calendar },
    { path: '/resultats', label: 'Résultats', icon: FileText },
    { path: '/automates', label: 'Automates', icon: Activity },
    { path: '/personnel', label: 'Personnel', icon: UserCog },
    { path: '/validation', label: 'Validation', icon: CheckCircle },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="layout">
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-logo">
            <Microscope size={24} />
            <span className="mobile-logo-text">Easy-SIL</span>
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Sidebar / Mobile Menu */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
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
              onClick={closeMobileMenu}
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

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}

      <main className="main-content">
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

