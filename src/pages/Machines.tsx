import { useState } from 'react'
import { Activity, AlertCircle, CheckCircle, Settings } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import './Pages.css'

interface Machine {
  id: number
  nom: string
  modele: string
  type: string
  statut: 'actif' | 'maintenance' | 'hors service'
  derniereCalibration: string
  prochaineMaintenance: string
}

const Machines = () => {
  const [machines] = useState<Machine[]>([
    {
      id: 1,
      nom: 'Automate 1',
      modele: 'Cobas 6000',
      type: 'Biochimie',
      statut: 'actif',
      derniereCalibration: '01/11/2025',
      prochaineMaintenance: '01/12/2025'
    },
    {
      id: 2,
      nom: 'Automate 2',
      modele: 'Sysmex XN-1000',
      type: 'Hématologie',
      statut: 'actif',
      derniereCalibration: '03/11/2025',
      prochaineMaintenance: '03/12/2025'
    },
    {
      id: 3,
      nom: 'Automate 3',
      modele: 'ABX Pentra 400',
      type: 'Immunologie',
      statut: 'maintenance',
      derniereCalibration: '20/10/2025',
      prochaineMaintenance: '20/11/2025'
    }
  ])

  const getStatusIcon = (statut: string) => {
    if (statut === 'actif') return <CheckCircle size={18} style={{ color: '#10b981' }} />
    if (statut === 'maintenance') return <Settings size={18} style={{ color: '#f59e0b' }} />
    return <AlertCircle size={18} style={{ color: '#ef4444' }} />
  }

  const getStatusBadge = (statut: string) => {
    const statusColors: Record<string, string> = {
      'actif': 'status-active',
      'maintenance': 'status-warning',
      'hors service': 'status-error'
    }
    return statusColors[statut] || 'status-pending'
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Automates</h1>
          <p className="page-subtitle">Gestion des équipements de laboratoire</p>
        </div>
        <Button>
          <Activity size={20} />
          Ajouter un automate
        </Button>
      </div>

      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#dcfce7' }}>
            <CheckCircle size={24} style={{ color: '#10b981' }} />
          </div>
          <div>
            <div className="stat-value">
              {machines.filter(m => m.statut === 'actif').length}
            </div>
            <div className="stat-label">Actifs</div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7' }}>
            <Settings size={24} style={{ color: '#f59e0b' }} />
          </div>
          <div>
            <div className="stat-value">
              {machines.filter(m => m.statut === 'maintenance').length}
            </div>
            <div className="stat-label">En maintenance</div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#fee2e2' }}>
            <AlertCircle size={24} style={{ color: '#ef4444' }} />
          </div>
          <div>
            <div className="stat-value">
              {machines.filter(m => m.statut === 'hors service').length}
            </div>
            <div className="stat-label">Hors service</div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="machines-grid">
          {machines.map(machine => (
            <div key={machine.id} className="machine-card">
              <div className="machine-header">
                <div className="machine-status">
                  {getStatusIcon(machine.statut)}
                </div>
                <span className={`status-badge ${getStatusBadge(machine.statut)}`}>
                  {machine.statut}
                </span>
              </div>
              <h3 className="machine-name">{machine.nom}</h3>
              <div className="machine-info">
                <div className="info-row">
                  <span className="info-label">Modèle:</span>
                  <span className="info-value">{machine.modele}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Type:</span>
                  <span className="info-value">{machine.type}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Dernière calibration:</span>
                  <span className="info-value">{machine.derniereCalibration}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Prochaine maintenance:</span>
                  <span className="info-value">{machine.prochaineMaintenance}</span>
                </div>
              </div>
              <Button variant="secondary" size="small" style={{ width: '100%', marginTop: '1rem' }}>
                <Settings size={16} />
                Configurer
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Machines

