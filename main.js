let lati;
let long;

const key = "88076336d8b4250e72b8563d6b5aefd1";


window.addEventListener("load",()=>{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>{
            lati = position.coords.latitude;
            long = position.coords.longitude;
        });
         const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=88076336d8b4250e72b8563d6b5aefd1`
        const fetchWeather =  async()=>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=88076336d8b4250e72b8563d6b5aefd1`);
            const weather = await response.json();
        }

        console.log(fetchWeather());
    }
})