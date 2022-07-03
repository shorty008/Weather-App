//api key for open weather
var apikey = "abb7b09f7a18a49716d93ad267773315";

//application variables
var forecastCityResults = document.querySelector("#forecastCityResults");
var weatherResults = document.querySelector("#weatherResults");
var searchForm = document.querySelector("#searchForm");
var search = document.querySelector("#search");
var selectedCity = document.querySelector("#city");
var fiveDayForecast = document.querySelector("fiveDayForecast");
var searchHistory = document.querySelector("#searchHistory");
var searchResults = document.querySelector("#searchResults");

//city search
var formSumbitHeader = function (event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        weatherCity(city);
    }
}

//API call
var weatherCity = function(city) {
    var captureCityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(captureCityUrl).then(function(response){
        if(response.ok){
            response.json().then(function(data){
                weatherResults(data, city);
        });
    }
        else {
            alert("The city entered was not found");
        }
    });
};


var clearData = function(){
    ulElement.textContent="";
    futureContainer.textContent="";

};

//Display today's weather
var weatherResults = function (weather, citySearch){
    console.log (weather);
    
    //clear previous weather values
    currentWeather.textContent = "";

    todaysResults.classList = "border";

    //Set city for forecast
    todayCityForecast.textContent = citySearch;

    //Set current date for forecast
    var currentDate = document.createElement("span");
    currentDate.textContent = moment(weather.current.dt.value).format(": MMM D, YYYY");
    todayCityForecast.appendChild(currentDate);

    //Display current weather icon
    var icon = document.createElement("img");
    var iconCode = weather.current.weather[0].icon
    icon.setAttribute("src","https://openweathermap.org/img/wn/" + iconCode + "@2x.png");
    todayCityForecast.appendChild(icon);

    //Get and display temp
    var temp = document.createElement("span");
    temp.textContent = "Today's Temperature: " + weather.current.temp + " F";
    currentWeather.appendChild(temp);

    //Get and display wind conditions
    var wind = document.createElement("span");
    wind.textContent = "Today's Wind Direction and Speed: " + weather.current.wind_deg + " degrees " + weather.current.wind_speed + " MPH";
    currentWeather.appendChild(wind);

    //Get and display Humidity
    var humidity = document.createElement("span");
    humidity.textContent = "Today's Humidity is: " + weather.current.humidity;
    currentWeather.appendChild(humidity);

    
}