import React from 'react'
import { useUser } from '../TryContent'

function Call() {
const {name} = useUser();

  return (
    <div>{name}</div>
  )
}

export default Call