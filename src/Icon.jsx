const Icons = (icon) => {

 const iconsMap = {
    'Thunderstorm': 'icons/thunderstorms-rain.svg',
    'Drizzle': 'icons/drizzle.svg',
    'Rain': 'icons/rain.svg',
    'Snow': 'icons/snowy.svg',
    'Clear': 'icons/clear-day.svg',
    'Atmosphere': 'icons/weather.svg',
    'Clouds': 'icons/fog.svg',
    'Fog': 'icons/fog.svg',
    'Haze': 'icons/haze.svg',
    'Smoke': 'icons/smoke.svg',
 }

 const defaultIcon = 'icons/clear-day.svg'


  return iconsMap[icon] || defaultIcon
}

export default Icons