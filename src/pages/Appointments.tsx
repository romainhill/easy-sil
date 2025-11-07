import { useState } from 'react'
import { Plus, Calendar as CalendarIcon, Clock } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import './Pages.css'

interface Appointment {
  id: number
  patient: string
  date: string
  heure: string
  type: string
  statut: 'planifié' | 'confirmé' | 'terminé' | 'annulé'
}

const Appointments = () => {
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      patient: 'Marie Dupont',
      date: '07/11/2025',
      heure: '09:00',
      type: 'Prise de sang',
      statut: 'confirmé'
    },
    {
      id: 2,
      patient: 'Jean Martin',
      date: '07/11/2025',
      heure: '10:30',
      type: 'Analyse d\'urine',
      statut: 'planifié'
    },
    {
      id: 3,
      patient: 'Sophie Bernard',
      date: '08/11/2025',
      heure: '14:00',
      type: 'Bilan complet',
      statut: 'confirmé'
    },
    {
      id: 4,
      patient: 'Pierre Dubois',
      date: '08/11/2025',
      heure: '15:30',
      type: 'Prélèvement',
      statut: 'planifié'
    }
  ])

  const getStatusBadge = (statut: string) => {
    const statusColors: Record<string, string> = {
      'planifié': 'status-pending',
      'confirmé': 'status-confirmed',
      'terminé': 'status-completed',
      'annulé': 'status-cancelled'
    }
    return statusColors[statut] || 'status-pending'
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Rendez-vous</h1>
          <p className="page-subtitle">Planning des rendez-vous patients</p>
        </div>
        <Button>
          <Plus size={20} />
          Nouveau rendez-vous
        </Button>
      </div>

      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#dbeafe' }}>
            <CalendarIcon size={24} style={{ color: '#2563eb' }} />
          </div>
          <div>
            <div className="stat-value">{appointments.length}</div>
            <div className="stat-label">Rendez-vous à venir</div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            <Clock size={24} style={{ color: '#10b981' }} />
          </div>
          <div>
            <div className="stat-value">
              {appointments.filter(a => a.statut === 'confirmé').length}
            </div>
            <div className="stat-label">Confirmés</div>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="card-title">Planning du jour</h3>
        <div className="appointments-list">
          {appointments.map(appointment => (
            <div key={appointment.id} className="appointment-item">
              <div className="appointment-time">
                <Clock size={18} />
                <span>{appointment.heure}</span>
              </div>
              <div className="appointment-details">
                <div className="appointment-patient">{appointment.patient}</div>
                <div className="appointment-type">{appointment.type}</div>
              </div>
              <span className={`status-badge ${getStatusBadge(appointment.statut)}`}>
                {appointment.statut}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Appointments

