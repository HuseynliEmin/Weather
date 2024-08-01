
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
function App() {
  let [search, setSearch] = useState("Osaka")
  let [city, setCity] = useState("Osaka")
  let [weather, setWeater] = useState()

  async function weatherAPI() {
    let response = await axios.get(`https://freetestapi.com/api/v1/weathers?search=${search}`)
    let responseData = response.data ? response.data : []
    responseData.map(item => {
      setCity(item.city)
      setWeater(item.temperature)
      console.log(item);
    })

  } useEffect(() => {
    weatherAPI()
  }, [])




  return (

    <div className='container'>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search for a city' />
      <button onClick={weatherAPI}>search</button>
      <h1>{city}</h1>
      <p>{weather}C°</p>
    </div>

  )
}

export default App
