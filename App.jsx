import React, { useState } from 'react'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import Candidates from './components/Candidates'
import Resumes from './components/Resumes'
import Templates from './components/Templates'
import Users from './components/Users'
import Analytics from './components/Analytics'

export default function App(){
  const [route, setRoute] = useState('dashboard')
  return (
    <div className="erp-app">
      <Nav route={route} setRoute={setRoute} />
      <main className="erp-main">
        {route === 'dashboard' && <Dashboard />}
        {route === 'candidates' && <Candidates />}
        {route === 'resumes' && <Resumes />}
        {route === 'templates' && <Templates />}
        {route === 'users' && <Users />}
        {route === 'analytics' && <Analytics />}
      </main>
    </div>
  )
}
