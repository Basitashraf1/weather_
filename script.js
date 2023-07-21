const apiKey="8df665bc8c66e46649116a4997d6a6dd"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector(".search input")
const button=document.querySelector(".search button")
const Icon=document.querySelector(".icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
let data= await response.json();
console.log(data)
document.querySelector(".city").innerHTML=data.name
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c"
document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
document.querySelector(".wind-speed").innerHTML=data.wind.speed + " km/h"

if(data.weather[0].main=="Clouds"){
    Icon.src="./images/clouds.png"
}
if(data.weather[0].main=="Clear"){
    Icon.src="./images/clear.png"
}
if(data.weather[0].main=="Rain"){
    Icon.src="./images/rain.png"
}
if(data.weather[0].main=="Drizzle"){
    Icon.src="./images/drizzle.png"
}
if(data.weather[0].main=="Mist"){
    Icon.src="./images/mist.png"
}
}
button.addEventListener("click",()=>{
    checkWeather(search.value)
})
checkWeather()
