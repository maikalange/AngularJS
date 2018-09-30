angular.module("weatherComponent", []).controller('weatherController', function ($scope, $http) {
    $scope.weather = {location: 'London', temperature: 'loading...', windspeed: '10', image: 'images/if_Partly_Cloudy__Rainy_3553110.png', date: 'Monday 10th October 2010'};
    $http.get('https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/history/city?q=London,UK&appid=b1b15e88fa797225412429c1c50c122a1')
            .then(function (response) {
                var weather = response.data;
                $scope.weather.temperature = weather.list[0].main.temp - 273;
                $scope.weather.date = (new Date(weather.list[0].dt * 1000)).toDateString();
                $scope.weather.image = "https://openweathermap.org/img/w/" + weather.list[0].weather[0].icon + ".png";

            });

}).directive('weatherComponent', function () {
    return{
        templateUrl: 'weather.html'
    };
});