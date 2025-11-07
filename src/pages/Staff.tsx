import { useState } from 'react'
import { Plus, UserCog, Mail, Phone } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import './Pages.css'

interface StaffMember {
  id: number
  nom: string
  prenom: string
  role: string
  specialite: string
  email: string
  telephone: string
  statut: 'actif' | 'congé' | 'inactif'
}

const Staff = () => {
  const [staff] = useState<StaffMember[]>([
    {
      id: 1,
      nom: 'Leroy',
      prenom: 'Catherine',
      role: 'Biologiste',
      specialite: 'Hématologie',
      email: 'c.leroy@labo.fr',
      telephone: '01 23 45 67 89',
      statut: 'actif'
    },
    {
      id: 2,
      nom: 'Moreau',
      prenom: 'Philippe',
      role: 'Technicien',
      specialite: 'Biochimie',
      email: 'p.moreau@labo.fr',
      telephone: '01 23 45 67 90',
      statut: 'actif'
    },
    {
      id: 3,
      nom: 'Simon',
      prenom: 'Isabelle',
      role: 'Biologiste',
      specialite: 'Microbiologie',
      email: 'i.simon@labo.fr',
      telephone: '01 23 45 67 91',
      statut: 'congé'
    },
    {
      id: 4,
      nom: 'Laurent',
      prenom: 'Marc',
      role: 'Technicien',
      specialite: 'Immunologie',
      email: 'm.laurent@labo.fr',
      telephone: '01 23 45 67 92',
      statut: 'actif'
    }
  ])

  const getStatusBadge = (statut: string) => {
    const statusColors: Record<string, string> = {
      'actif': 'status-active',
      'congé': 'status-warning',
      'inactif': 'status-cancelled'
    }
    return statusColors[statut] || 'status-pending'
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Personnel</h1>
          <p className="page-subtitle">Gestion de l'équipe du laboratoire</p>
        </div>
        <Button>
          <Plus size={20} />
          Ajouter un membre
        </Button>
      </div>

      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#dbeafe' }}>
            <UserCog size={24} style={{ color: '#2563eb' }} />
          </div>
          <div>
            <div className="stat-value">{staff.length}</div>
            <div className="stat-label">Membres du personnel</div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            <UserCog size={24} style={{ color: '#10b981' }} />
          </div>
          <div>
            <div className="stat-value">
              {staff.filter(s => s.statut === 'actif').length}
            </div>
            <div className="stat-label">Actifs</div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="staff-grid">
          {staff.map(member => (
            <div key={member.id} className="staff-card">
              <div className="staff-avatar">
                {member.prenom.charAt(0)}{member.nom.charAt(0)}
              </div>
              <div className="staff-info">
                <h3 className="staff-name">{member.prenom} {member.nom}</h3>
                <div className="staff-role">{member.role}</div>
                <div className="staff-specialite">{member.specialite}</div>
                <div className="staff-contact">
                  <div className="contact-item">
                    <Mail size={14} />
                    <span>{member.email}</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={14} />
                    <span>{member.telephone}</span>
                  </div>
                </div>
                <span className={`status-badge ${getStatusBadge(member.statut)}`}>
                  {member.statut}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Staff

