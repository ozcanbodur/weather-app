const url = 'https://api.openweathermap.org/data/2.5/'
const key = '4625275f2d1644763f99fb74b9c5cf8d'
const searchBar = document.getElementById('searchBar')


const setQuery = (e) => {
  if (e.keyCode == '13') {
    getResult(searchBar.value)
    const thermometreContainer = document.getElementById('thermometre-container',)
    thermometreContainer.style.visibility = 'visible'
    
  }
}

const getResult = (cityName) => {
  const query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
  fetch(query)
    .then((weather) => {
      if (!weather.ok) {
        alert('Şehir Bulunamadı')
        return null
      }
      return weather.json()
    })
    .then(displayResult)
    .catch((error) => {
      alert('Error : ${error}')
    })
}
const displayResult = (result) => {
  if (!result) return
  let city = document.querySelector('.city')
  city.innerText = `${result.name} ${result.sys.country}`

  let temp = document.querySelector('.temp')
  temp.innerText = `${Math.round(result.main.temp)}°C`
  const thermometer = `${Math.round(result.main.temp)}`

  let desc = document.querySelector('.desc')
  desc.innerText = result.weather[0].description

  let minmax = document.querySelector('.minmax')
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max,
  )}°C`
  if (thermometer < 0) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '50%')
    box.style.setProperty('--thermoColor', '#6dd5ed')
    cricle.style.setProperty('--thermoColor', '#6dd5ed')
  } else if (thermometer > 0 && thermometer <= 5) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '55%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  } else if (thermometer > 5 && thermometer <= 10) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '10%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  } else if (thermometer > 10 && thermometer <= 20) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '25%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  } else if (thermometer > 20 && thermometer <= 30) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '50%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  } else if (thermometer > 30 && thermometer < 40) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '75%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  } else if (thermometer > 40 && thermometer < 45) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '90%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  } else if ((thermometer) => 45) {
    let box = document.getElementById('bar')
    let cricle = document.getElementById('cricle')
    box.style.setProperty('--thermoHeight', '100%')
    box.style.setProperty('--thermoColor', '#ff3d00')
    cricle.style.setProperty('--thermoColor', '#ff3d00')
  }
}
searchBar.addEventListener('keypress', setQuery)