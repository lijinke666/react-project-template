import React, { useCallback } from 'react'
import { Divider, Button } from 'antd'
import './index.less'

const Home = () => {
  const onGoToGithub = useCallback(() => {
    window.location.href = 'https://github.com/lijinke666/dawdler.git'
  }, [])

  return (
    <>
      <h2>
        Hey ! Thank you for using {'  '}
        <strong className="name">dawdler</strong>
      </h2>
      <Button icon="github" type="primary" onClick={onGoToGithub}>
        Github
      </Button>
      <Divider>
        dawdler By:{' '}
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
