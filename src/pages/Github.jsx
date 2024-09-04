import React from 'react'
import Githubapi, { SecondGithubapi } from '../githubpage/Githubapi'

const Github = () => {

  return (
    <div>
      <h1>This is github page</h1>
      <Githubapi />
      <SecondGithubapi/>
    </div>
  )
}

export default Github
