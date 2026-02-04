import React from 'react'
import {Link} from "react-router-dom";

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"red"}}>
        NetFlixMovies

      </h1>
      <li>
        <Link to="/watch/Bahubali 1">Bahubali 1</Link></li>
      <li>
        <Link to="/watch/Salar">Salar</Link></li>
      <li>
        <Link to="/watch/Dangal">Dangal</Link></li>
      <li>
        <Link to="/watch/Dhurandhar">Dhurandhar</Link></li>
      <li>
        <Link to="/watch/SuperStar">SuperStar</Link></li>
      <li>
        <Link to="/watch/Pink">Pink</Link></li>
      <li>
        <Link to="/watch/Bahubali 2">Bahubali 2</Link></li>
      <li>
        <Link to="/watch/Saiyaara">Saiyaara</Link></li>
      <li>
        <Link to="/watch/Tiger Zinda Hai">Tiger Zinda Hai</Link></li>
      <li>
        <Link to="/watch/Hindi Medium">Hindi Medium</Link></li>
    
    
    </div>
  )
}
