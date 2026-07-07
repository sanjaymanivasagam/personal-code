import React from 'react'

export default function Resumes(){
  const raw = localStorage.getItem('marvelous_resumes_v1')
  const resumes = raw ? JSON.parse(raw) : []
  return (
    <div>
      <h2>Resumes</h2>
      <p>Central resume list (reads from existing app storage).</p>
      <ul>
        {resumes.map((r,i)=> <li key={i}>{r.name} — updated {r.updatedAt ? new Date(r.updatedAt).toLocaleString() : '—'}</li>)}
      </ul>
    </div>
  )
}
