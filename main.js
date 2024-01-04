const screen = document.querySelector("body");


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

    console.log(result);
    var date = new Date();   var time  = date.getHours();
    if( time > 18)
    {

        if(result.weather[0].main ==="Rain")
        {   
            console.log("its raining")
        }
        else{
        if(result.visibility<500)
        {
            console.log("foggy")
        }
        else if(result.clouds.all > 50){
           
        }
        else{
            console.log("clear night sky");
            screen.style.backgroundImage = url("https://github.com/ashfaqjani916/Weather-App/assets/clear night sky.jpg");
        }
    }
    }
    else
    {
        if(result.weather[0].main ==="Rain")
        {   
            console.log("its raining")
        }
        else{
            if(result.visibility<500)
            {
                console.log("foggy")
            }
            else if(result.clouds.all > 50){
            console.log("cloudy day");
            }
            else{
            console.log("sunny day");
        }
    }
    }

}