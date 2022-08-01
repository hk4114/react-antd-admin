import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <main>Home</main>
      <nav>
        <Link to="/about">About</Link>
        <br />
        <Link to="/abouts">Aboutsssssssssss</Link>
      </nav>
    </>
  )
}
