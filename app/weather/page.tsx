"use client"
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { error } from 'console'

export default function Home() {
  const [currentCity, setCurrentCity] = useState("")
  const [minTemperature, setMinTemperature] = useState(0.0)
  const [maxTempertaure, setMaxTemperature] = useState(0.0)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=${process.env.WEATHER_API_KEY}`
  axios.get(url)
    .then(response => {
      setCurrentCity((val) => ("pune"))
      setMaxTemperature(response.data.main.temp_max)
      setMinTemperature(response.data.main.temp_min)
    }).catch(error => {
      console.error(error)
    })
  return (
    <main>
      <div className='w-full h- bg-slate-700'>
        <div className='justify-center'>
          <h1>Current City : {currentCity}</h1>
          <h2>Min Temp:{minTemperature}</h2>
          <h2>Max Temp:{maxTempertaure}</h2>
        </div>
      </div>
    </main>
  )
}
