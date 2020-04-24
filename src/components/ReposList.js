import React, { useState, useEffect } from 'react'
import { getRepos } from '../api'
import InfiniteScroll from 'react-infinite-scroller'
import Repo from './Repo'

function ReposList() {

  const [repos, setRepos] = useState([])
  const [startDate] = useState(monthEarlier)

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

  async function fetchRepos(page) {
    const result = await getRepos(startDate, page)
    setRepos(repos.concat(result.items))
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchRepos}
      hasMore={true}
      loader={
        <div className="loader" key={0}>
          Loading...
        </div>
      }
    >
      {
        repos.map(item => (
          <Repo key={item.id} repo={item} />
        ))
      }
    </InfiniteScroll>
  )
}

export default ReposList
