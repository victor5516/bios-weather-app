import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Icons from './Icon'
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_KEY
function App() {
const [search, setSearch] = useState('roma')
const [values, setValues] = useState('')
const [icon, setIcon] = useState('')

const URL =`https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${WEATHER_API_KEY}`

 const getWeather = async () => {
  const res = await fetch(URL)
  const data = await res.json()
  console.log(data)
  setValues(data)
  setIcon(data.weather[0].main)
 }

 const handleSearch = (e) =>{
  if(e.key === 'Enter') {
      setSearch(e.target.value)
  }
 }

 useEffect(() => {
  getWeather()
 }, [search])





  return (
    <>

    <h2>REACT WEATHER APP </h2>
    <div>
      <input onKeyDown={handleSearch} type="text" />

        </div>


<Card title={values.name} maxDegree={values.main.temp} minDegree={values.main.temp_min} currentDegree={values.main.temp_max}  icon={Icons(icon)}/>

  </>
  )

}

export default App
