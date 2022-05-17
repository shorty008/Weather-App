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


//API call
var weatherCap = function (city) {
    var capturecityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    fetch(capturecityUrl).then(function(response){
        if(response.ok){
            city = city.toUpperCase();
            response.json().then(function(data){
                var lat = data.coord.lat;
                var long = data.coord.lon;
                var captureUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + apiKey;
                fetch(captureUrl).then(function(response){
                    response.json().then(function(data){
                        displayWeather(data,city);
                    })
                })
            });
        }
        else {
            alert("The city entered was not found");
        }
    });
};