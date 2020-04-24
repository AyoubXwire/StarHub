import axios from 'axios'

export async function getRepos(startAt = '2017-10-22', page = 1) {
  const response = await axios.get(
    `https://api.github.com/search/repositories?q=created:>${startAt}&sort=stars&order=desc&page=${page}`
  )

  return response.data
}