import $ from "jquery";

const searchClick = () => {
  $("#searchicon").toggle();
  $("#wikiicon").toggle();
  $("#searchbox").fadeIn(1000);
  $("#searchback").fadeIn(1000);
  $("#weather").toggle();
  $("footer").toggle();
  $("#searchbox").focus();
};

export default searchClick;
