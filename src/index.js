import $ from 'jquery';
import './style.scss';
import './fontawesome5';
import 'bootstrap';
import getAPI from "./getAPI";
import searchClick from "./searchClick";
import returnHome from "./returnHome";

document.addEventListener('DOMContentLoaded',() => {
  $("#searchbox").val("");
  $('[data-toggle="tooltip"]').tooltip();

  $("p").click('[data-fa-i2svg]', searchClick);
  $("#searchbox").keydown(getAPI);
  $("span").click('data-fa-i2svg', returnHome);
});  