import { useState } from 'react'
import { Plus, Search, Eye, Edit, Trash2 } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import './Pages.css'

interface Patient {
  id: number
  nom: string
  prenom: string
  dateNaissance: string
  numeroSecu: string
  telephone: string
  email: string
}

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Données de démonstration
  const [patients] = useState<Patient[]>([
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Marie',
      dateNaissance: '15/03/1985',
      numeroSecu: '2 85 03 75 123 456 78',
      telephone: '06 12 34 56 78',
      email: 'marie.dupont@email.fr'
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Jean',
      dateNaissance: '22/07/1978',
      numeroSecu: '1 78 07 75 987 654 32',
      telephone: '06 98 76 54 32',
      email: 'jean.martin@email.fr'
    },
    {
      id: 3,
      nom: 'Bernard',
      prenom: 'Sophie',
      dateNaissance: '10/11/1992',
      numeroSecu: '2 92 11 75 456 789 12',
      telephone: '06 45 67 89 01',
      email: 'sophie.bernard@email.fr'
    }
  ])

  const filteredPatients = patients.filter(patient =>
    patient.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.numeroSecu.includes(searchTerm)
  )

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Patients</h1>
          <p className="page-subtitle">Gestion des dossiers patients</p>
        </div>
        <Button>
          <Plus size={20} />
          Nouveau patient
        </Button>
      </div>

      <Card>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un patient (nom, prénom, n° sécurité sociale)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de naissance</th>
                <th>N° Sécurité Sociale</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map(patient => (
                <tr key={patient.id}>
                  <td><strong>{patient.nom}</strong></td>
                  <td>{patient.prenom}</td>
                  <td>{patient.dateNaissance}</td>
                  <td className="text-mono">{patient.numeroSecu}</td>
                  <td>{patient.telephone}</td>
                  <td>{patient.email}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="Voir">
                        <Eye size={16} />
                      </button>
                      <button className="action-btn edit" title="Modifier">
                        <Edit size={16} />
                      </button>
                      <button className="action-btn delete" title="Supprimer">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <p className="table-info">{filteredPatients.length} patient(s) affiché(s)</p>
        </div>
      </Card>
    </div>
  )
}

export default Patients

