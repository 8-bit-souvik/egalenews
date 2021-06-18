var latitude = null;
var longitude = null;





//   fetch api from cloud ************

var weather = {

    fetchWeather: function () {
        console.log("p-3; s-1");
        console.log(latitude);
        console.log(longitude);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=348a479bce7d7030c42f332351518976`)


            .then((response) => {
                console.log("p-3; s-2");
                console.log(response.json);
                return response.json()
            })

            .then((data) => {
                console.log("p-3; s-3");
                console.log(data);
                // this.fetchContent(data)
            })

            .catch(err => {
                console.error(err);
            });
    },

    fetchContent: (data) => {


    }
}































async function weatherDisplay() {
    let weatherData = new Promise(function getLocation() {
        console.log("p-4; s-1");
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
            console.log(navigator.geolocation.watchPosition(showPosition));
    
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    },
    
    function showPosition(position) {
        console.log("p-4; s-2");
        console.log(position);
        console.log("lat: " + position.coords.latitude + "    lon: " + position.coords.longitude);
    
    
    
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    
    
    
    });
    weather.fetchWeather();
}

weatherDisplay();