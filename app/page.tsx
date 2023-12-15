"use client"
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { error } from 'console'
import Card from '@/components/Card'

export default function Home() {
  // const [currentCity, setCurrentCity] = useState("")
  // const [minTemperature, setMinTemperature] = useState(0.0)
  // const [maxTempertaure, setMaxTemperature] = useState(0.0)
  const [loading,setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [city, setCity] = useState("")
  const fetchWeather= (e) => {
    e.preventDefault()
    setLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    axios.get(url)
      .then(response => {
        // setCurrentCity((val) => ("mumbai"))
        // setMaxTemperature(response.data.main.temp_max)
        // setMinTemperature(response.data.main.temp_min)
        setData(response.data)
        // console.log(data)
      }).catch(error => {
        console.error(error)
      })
    setLoading(false)
  }
  if(loading){
    <h1>Loading..............</h1>
  }else{
  return (
    <main>
      <div className='w-full h- bg-slate-700 flex align items-center flex-col h-96'>
        <form onSubmit={fetchWeather}>
          <input type="text" value={city} id="search-navbar" onChange={(e) => setCity(e.target.value)} className="w-60 m-7 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City Name.." />
          <button onClick={fetchWeather} className="border-gray-300" type='submit'>Submit</button>
        </form>
        {data && <Card data={data} city={city} />}
      </div>
    </main>
  )
  }
}
