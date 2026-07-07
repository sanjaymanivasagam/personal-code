import React, { useState, useEffect } from 'react'

export default function Candidates(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    const raw = localStorage.getItem('erp:candidates')
    setItems(raw ? JSON.parse(raw) : [])
  },[])
  return (
    <div>
      <h2>Candidates</h2>
      <p>List and manage candidates (mocked via localStorage).</p>
      <ul>
        {items.map(c=> <li key={c.id}>{c.name} — {c.email}</li>)}
      </ul>
    </div>
  )
}
