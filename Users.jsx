import React, { useState, useEffect } from 'react'

const isGmail = email => {
  if (!email) return false
  return /^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(email.trim())
}

export default function Users(){
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('editor')
  const [error, setError] = useState('')

  useEffect(()=>{
    const raw = localStorage.getItem('erp:users')
    setUsers(raw ? JSON.parse(raw) : [])
  },[])

  const persist = next => {
    setUsers(next)
    try { localStorage.setItem('erp:users', JSON.stringify(next)) } catch(e){}
  }

  const handleAdd = e => {
    e.preventDefault()
    setError('')
    if (!name.trim()) return setError('Name is required')
    if (!email.trim()) return setError('Email is required')
    if (!isGmail(email)) return setError('Only Gmail addresses are accepted')

    const next = [...users, { id: Date.now(), name: name.trim(), email: email.trim(), role }]
    persist(next)
    setName('')
    setEmail('')
    setRole('editor')
  }

  const handleDelete = id => {
    const next = users.filter(u => u.id !== id)
    persist(next)
  }

  return (
    <div>
      <h2>Users</h2>
      <p>Manage team users, roles and permissions. (Gmail-only email validation)</p>

      <form onSubmit={handleAdd} style={{marginBottom:16}}>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
          <input placeholder="Email (gmail only)" value={email} onChange={e=>setEmail(e.target.value)} />
          <select value={role} onChange={e=>setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="recruiter">Recruiter</option>
            <option value="editor">Editor</option>
          </select>
          <button type="submit">Add User</button>
        </div>
        {error && <div style={{color:'salmon',marginTop:8}}>{error}</div>}
      </form>

      <div>
        <h3>Team</h3>
        <ul>
          {users.length === 0 && <li style={{color:'#94a3b8'}}>No users yet.</li>}
          {users.map(u => (
            <li key={u.id} style={{marginBottom:8}}>
              <strong>{u.name}</strong> — {u.email} <em>({u.role})</em>
              <button style={{marginLeft:8}} onClick={()=>handleDelete(u.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
