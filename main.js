


window.addEventListener("load",()=>{
    
    if(navigator.geolocation)
    {
         let pos;
        navigator.geolocation.getCurrentPosition((position)=> {getWeather(position.coords.latitude, position.coords.longitude);});
        
        function getWeather(lati, long) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=88076336d8b4250e72b8563d6b5aefd1`)
                .then(response => response.json())
                .then(result => {
                    display(result);
                })
                .catch(err => {
                    alert(err);
                    console.log(err);
                });
        }
        
    }
})

function display(result){

}