import { reqTest } from '@/http'
import { IHighScore, IHighScoreItem } from '@/typings/home'
import React, { memo, useEffect, useState } from 'react'

const Home = memo(() => {
  const [highScore, setHighScore] = useState<IHighScore | undefined>()
  useEffect(() => {
    const handleReqTest = async () => {
      const res = await reqTest()
      setHighScore(res)
    }
    handleReqTest()
  }, [])
  return (
    <div>
      <h2>{highScore?.title}</h2>
      <h4>{highScore?.subtitle}</h4>
      <ul>
        {
          highScore?.list?.map((item: IHighScoreItem, index: any) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home