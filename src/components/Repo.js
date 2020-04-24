import React from 'react'
import './Repo.css'
import { Card, Tag } from '@blueprintjs/core'
import moment from 'moment'

function Repo({ repo }) {
  return (
    <Card className='card' elevation={1}>
      <div className='avatar-container'>
        <img className='avatar' src={repo.owner.avatar_url} alt='avatar' />
      </div>

      <div>
        <a className='link' target='blank' href={repo.html_url}>
          <h2>{repo.name}</h2>
        </a>
        <p>{repo.description}</p>

        <div className='stats-container'>
          <Tag className='tag' large minimal interactive icon='star'>{repo.stargazers_count}</Tag>
          <Tag className='tag' large minimal interactive icon='issue'>{repo.open_issues_count}</Tag>
          <p>
            {moment(repo.created_at).fromNow()} by <a className='link' target='blank' href={repo.owner.html_url}>
              {repo.owner.login}
            </a>
          </p>
        </div>
      </div>
    </Card>
  )
}

export default Repo
