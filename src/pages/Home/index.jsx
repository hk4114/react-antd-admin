import React, { useEffect } from 'react'
import request from '@/utils/request'

export default function Home() {
  useEffect(() => {
    request
      .get('https://randomuser.me/api', { ID: 12345 }, { retryTimes: 2 })
      .then(res => {
        console.log(res)
      })
  }, [])
  return <div>Home</div>
}
