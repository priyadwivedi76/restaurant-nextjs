'use client'
import React, { useEffect, useState } from 'react'


const Countdown = () => {
  const targetDate=new Date("2026-03-17T00:00:00").getTime()
  const [counter,setCounter]=useState(
    targetDate-Date.now()
  )

  useEffect(()=>{
    if(counter <= 0) return;

    const timer=setInterval(()=>{
      setCounter((prev)=>prev-1000)
    },1000)

    return clearInterval(timer);
  },[counter])

  //Conversion from miliseconds to readable format
  const d = Math.floor(counter / (1000 * 60 * 60 * 24));
  const h = Math.floor((counter / (1000 * 60 * 60)) % 24);
  const m = Math.floor((counter / (1000 * 60)) % 60);
  const s = Math.floor((counter / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
       {d}d : {h}h : {m}m : {s}s 
    </span> 
  )
}

export default Countdown