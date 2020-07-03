import $ from "jquery";
import "./style.scss";
import "./fontawesome5";
import "bootstrap";
import getWeatherAPI from "./getWeatherAPI";
import getWikiAPI from "./getWikiAPI";
import searchClick from "./searchClick";
import returnHome from "./returnHome";

document.addEventListener("DOMContentLoaded", () => {
  getWeatherAPI();
  $("#searchbox").val("");
  $('[data-toggle="tooltip"]').tooltip();

  $("p").click("[data-fa-i2svg]", searchClick);
  $("#searchbox").keydown((e) => {
    if (e.keyCode === 13) {
      return getWikiAPI();
    }
    if (e.keyCode === 27) {
      return returnHome();
    }
  });
  $("span").click("data-fa-i2svg", returnHome);
});
