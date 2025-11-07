import { useState } from 'react'
import { CheckCircle, AlertTriangle, FileText } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import './Pages.css'

interface ValidationItem {
  id: number
  patient: string
  typeAnalyse: string
  date: string
  valeurs: { parametre: string; resultat: string; normes: string; alerte: boolean }[]
}

const Validation = () => {
  const [validationItems] = useState<ValidationItem[]>([
    {
      id: 1,
      patient: 'Marie Dupont',
      typeAnalyse: 'Numération formule sanguine',
      date: '06/11/2025',
      valeurs: [
        { parametre: 'Hémoglobine', resultat: '13.5 g/dL', normes: '12-16 g/dL', alerte: false },
        { parametre: 'Leucocytes', resultat: '8.2 G/L', normes: '4-10 G/L', alerte: false },
        { parametre: 'Plaquettes', resultat: '250 G/L', normes: '150-400 G/L', alerte: false }
      ]
    },
    {
      id: 2,
      patient: 'Jean Martin',
      typeAnalyse: 'Bilan lipidique',
      date: '07/11/2025',
      valeurs: [
        { parametre: 'Cholestérol total', resultat: '2.45 g/L', normes: '< 2.00 g/L', alerte: true },
        { parametre: 'HDL', resultat: '0.45 g/L', normes: '> 0.40 g/L', alerte: false },
        { parametre: 'LDL', resultat: '1.65 g/L', normes: '< 1.60 g/L', alerte: true },
        { parametre: 'Triglycérides', resultat: '1.20 g/L', normes: '< 1.50 g/L', alerte: false }
      ]
    }
  ])

  const handleValidate = (id: number) => {
    console.log('Validation du résultat:', id)
    // Logique de validation
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Validation</h1>
          <p className="page-subtitle">Validation biologique des résultats</p>
        </div>
      </div>

      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7' }}>
            <FileText size={24} style={{ color: '#f59e0b' }} />
          </div>
          <div>
            <div className="stat-value">{validationItems.length}</div>
            <div className="stat-label">En attente de validation</div>
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-icon" style={{ background: '#fee2e2' }}>
            <AlertTriangle size={24} style={{ color: '#ef4444' }} />
          </div>
          <div>
            <div className="stat-value">
              {validationItems.filter(item => 
                item.valeurs.some(v => v.alerte)
              ).length}
            </div>
            <div className="stat-label">Avec alertes</div>
          </div>
        </Card>
      </div>

      <div className="validation-list">
        {validationItems.map(item => (
          <Card key={item.id} className="validation-card">
            <div className="validation-header">
              <div>
                <h3 className="validation-patient">{item.patient}</h3>
                <p className="validation-type">{item.typeAnalyse}</p>
                <p className="validation-date">Date: {item.date}</p>
              </div>
              {item.valeurs.some(v => v.alerte) && (
                <div className="alert-badge">
                  <AlertTriangle size={20} />
                  <span>Valeurs hors normes</span>
                </div>
              )}
            </div>

            <div className="validation-results">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Paramètre</th>
                    <th>Résultat</th>
                    <th>Normes</th>
                    <th>État</th>
                  </tr>
                </thead>
                <tbody>
                  {item.valeurs.map((valeur, index) => (
                    <tr key={index} className={valeur.alerte ? 'row-alert' : ''}>
                      <td><strong>{valeur.parametre}</strong></td>
                      <td className="text-mono">{valeur.resultat}</td>
                      <td className="text-mono">{valeur.normes}</td>
                      <td>
                        {valeur.alerte ? (
                          <span className="status-badge status-error">
                            <AlertTriangle size={14} />
                            Hors normes
                          </span>
                        ) : (
                          <span className="status-badge status-active">
                            <CheckCircle size={14} />
                            Normal
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="validation-actions">
              <Button 
                variant="success" 
                onClick={() => handleValidate(item.id)}
              >
                <CheckCircle size={18} />
                Valider le résultat
              </Button>
              <Button variant="secondary">
                Demander révision
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Validation

