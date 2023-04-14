import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Setting() {
  return (
    <>
      <h1>setting </h1>
      <Link to="app">app</Link>
      <hr />
      <Link to="profile">profile</Link>
      <Outlet/>
    </>
  )
}
