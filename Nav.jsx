import React from 'react'

const items = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'candidates', label: 'Candidates' },
  { id: 'resumes', label: 'Resumes' },
  { id: 'templates', label: 'Templates' },
  { id: 'users', label: 'Users' },
  { id: 'analytics', label: 'Analytics' }
]

export default function Nav({ route, setRoute }){
  return (
    <nav className="erp-nav">
      <div className="brand">Resume ERP</div>
      <ul>
        {items.map(i => (
          <li key={i.id} className={route === i.id ? 'active' : ''} onClick={() => setRoute(i.id)}>{i.label}</li>
        ))}
      </ul>
    </nav>
  )
}
