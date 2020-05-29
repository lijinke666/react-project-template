import React, { useCallback } from 'react'
import { Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import './index.less'

const Home = () => {
  const onGoToGithub = useCallback(() => {
    window.location.href = 'https://github.com/lijinke666/dawdler.git'
  }, [])

  return (
    <div className="home">
      <h2>
        Hey ! Thank you for using
        <strong className="name">dawdler</strong>
      </h2>
      <Button icon={<GithubOutlined />} type="primary" onClick={onGoToGithub}>
        Github
      </Button>
    </div>
  )
}

export default Home
