import { useState } from 'react'
import { Download, Eye, Search } from 'lucide-react'
import Card from '../components/Card'
import './Pages.css'

interface Result {
  id: number
  patient: string
  typeAnalyse: string
  datePrelevement: string
  dateResultat: string
  statut: 'en cours' | 'terminé' | 'validé'
}

const Results = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const [results] = useState<Result[]>([
    {
      id: 1,
      patient: 'Marie Dupont',
      typeAnalyse: 'Numération formule sanguine',
      datePrelevement: '05/11/2025',
      dateResultat: '06/11/2025',
      statut: 'validé'
    },
    {
      id: 2,
      patient: 'Jean Martin',
      typeAnalyse: 'Bilan lipidique',
      datePrelevement: '06/11/2025',
      dateResultat: '07/11/2025',
      statut: 'terminé'
    },
    {
      id: 3,
      patient: 'Sophie Bernard',
      typeAnalyse: 'Glycémie à jeun',
      datePrelevement: '07/11/2025',
      dateResultat: '-',
      statut: 'en cours'
    }
  ])

  const filteredResults = results.filter(result =>
    result.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.typeAnalyse.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (statut: string) => {
    const statusColors: Record<string, string> = {
      'en cours': 'status-pending',
      'terminé': 'status-completed',
      'validé': 'status-validated'
    }
    return statusColors[statut] || 'status-pending'
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Résultats</h1>
          <p className="page-subtitle">Résultats des analyses biologiques</p>
        </div>
      </div>

      <Card>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un résultat (patient, type d'analyse)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Type d'analyse</th>
                <th>Date prélèvement</th>
                <th>Date résultat</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map(result => (
                <tr key={result.id}>
                  <td><strong>{result.patient}</strong></td>
                  <td>{result.typeAnalyse}</td>
                  <td>{result.datePrelevement}</td>
                  <td>{result.dateResultat}</td>
                  <td>
                    <span className={`status-badge ${getStatusBadge(result.statut)}`}>
                      {result.statut}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="Voir">
                        <Eye size={16} />
                      </button>
                      <button className="action-btn download" title="Télécharger">
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <p className="table-info">{filteredResults.length} résultat(s) affiché(s)</p>
        </div>
      </Card>
    </div>
  )
}

export default Results

