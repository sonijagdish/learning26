import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    const moviesName = useParams().name
  return (
    <div style ={{textAlign:"center"}}>
<h1>Watching....{moviesName}</h1>
    </div>
  )
}
