import $ from "jquery";

function getWeatherAPI() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const vido = Math.round(position.coords.latitude * 100) / 100;
      const kinhdo = Math.round(position.coords.longitude * 100) / 100;

      $("#my-location").html("Latitude: " + vido + "<br>Longitude: " + kinhdo);

      const apilink =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        vido +
        "&lon=" +
        kinhdo;
      const result = function (info) {
        $("#temp").text(info.main.temp);
        $("#city").text(info.name);
        $("#country").text(info.sys.country);
        $("#hinhanh").attr("src", info.weather[0].icon);
        $("#thoitiet").text(info.weather[0].description);
      };
      $.getJSON(apilink, result);
    });
  }
}

export default getWeatherAPI;
