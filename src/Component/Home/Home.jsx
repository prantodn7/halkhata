import React from 'react'
import Cover from './Cover'
import Busniess from './Busniess'
import Grow from './Grow'
import Compare from './Compare'
import Downloadbanner from './Downloadbanner'

export default function Home() {
  return (
    <div>
      <Cover />
      <Grow />
      <Compare />
      <Busniess />
      {/* <Feedback /> */}
      <Downloadbanner />
    </div>
  )
}
