import React, { useState, useEffect } from 'react'
import { getRepos } from '../api'

function ReposList() {

  const [fetching, setFetching] = useState(true)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetchRepos()
  }, [])

  // get a 30 days earlier formatted date
  function monthEarlier() {
    const monthEarlier = new Date()
    monthEarlier.setDate(new Date().getDate() - 30)
    const formatedMonthearlier = monthEarlier.toISOString().split('T')[0]

    return formatedMonthearlier
  }

  async function fetchRepos() {
    const response = await getRepos(monthEarlier(), 1)
    setRepos(response.items)
    setFetching(false)
  }

  if (fetching) return (
    <p>Loading..</p>
  )

  return (
    <div>
      {
        repos.map(repo => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default ReposList
