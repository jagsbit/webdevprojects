
const apiUrl="https://api.openweathermap.org/data/2.5/weather?";
async function checkWeather(city){
    const response=await fetch(apiUrl+`q=${city}&appid=ad539e5b96aba032659f7da78e6a9aec&units=metric`);
    var data= await response.json();
    if(data.cod=="404"){
        alert("Enter correct city name");
         
        return;
    }
    document.querySelector(".weather").style.display="flex";
    document.querySelector(".details").style.display="flex";
    document.querySelector(".weather h1").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".weather h2").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".windspeed").innerHTML=data.main.temp+"km/h";
    let weather= data.weather[0].description;
    console.log(weather);
    let image=document.querySelector(".weather-icon");
    switch(weather) {
        case "clear":
          // code block
          image.setAttribute("src","clear.png");
          break;
        case "mist":
          // code block
          image.setAttribute("src","mist.png");
          break;
        case "clouds":
            // code block
            image.setAttribute("src","clouds.png");
            break;
        case "drizzle":
                // code block
            image.setAttribute("src","drizzle.png");
            break;
        case "rain":
                // code block
        image.setAttribute("src","rain.png");
        break;
        case "snow":
                // code block
            image.setAttribute("src","snow.png");
            break;
        case "wind":
                // code block
        image.setAttribute("src","wind.png");
        break;
        case "haze":
            // code block
       image.setAttribute("src","drizzle.png");
       break;

        default:
          // code block
      }

    

     
}
document.querySelector(".search").addEventListener("click", function() {
    let city=document.querySelector(".city").value;
    checkWeather(city);
    
  });

