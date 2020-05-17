import React, { useCallback } from 'react'
import './index.less'
import { Divider, Button } from 'antd'

const Home = () => {
  const goGithub = useCallback(() => {
    location.href = 'https://github.com/lijinke666/dawdler.git'
  }, [])
  return (
    <>
      <h2>
        Hey ! Thank you for using {'  '}
        <strong className="name">dawdler</strong>
      </h2>
      <Button icon="github" type="primary" onClick={goGithub}>
        Github
      </Button>
      <Divider>
        {name} By:{' '}
        <a
          href="https://github.com/lijinke666/dawdler.git"
          rel="noopener noreferrer"
          target="_blank"
        >
          dawdler
        </a>
      </Divider>
    </>
  )
}

export default Home
