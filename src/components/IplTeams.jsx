import React from 'react'
import { Link } from 'react-router-dom'

export const IplTeams = () => {
  return (
    
   
    <div style ={{textAlign:"center"}}>
        <h1 style={{color:"red"}}>

            IPL Teams
            </h1>


    <li>
        <Link to="/watch/Chennai Super Kings">Chennai Super Kings</Link></li>
      <li>
        <Link to="/watch/Royal Challengers Bengaluru">Royal Challengers Bengaluru</Link></li>
      <li>
        <Link to="/watch/Mumbai Indians ">Mumbai Indians </Link></li>
      <li>
        <Link to="/watch/Kolkata Knight Riders">Kolkata Knight Riders </Link></li>
      <li>
        <Link to="/watch/Rajasthan Royals">Rajasthan Royals</Link></li>
      <li>
        <Link to="/watch/Sunrisers Hyderabad">Sunrisers Hyderabad </Link></li>
      <li>
        <Link to="/watch/Delhi Capital">Delhi Capitals</Link></li>
      <li>
        <Link to="/watch/Punjab Kings ">Punjab Kings</Link></li>
      <li>
        <Link to="/watch/Lucknow Super Giants">Lucknow Super Giants</Link></li>
      <li>
        <Link to="/watch/Gujarat Titans">Gujarat Titans </Link></li>

 </div>
  )
}
