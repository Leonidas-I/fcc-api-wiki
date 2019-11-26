import $ from 'jquery';

const searchClick = () => {
  $("#searchicon").toggle();
  $("#wikiicon").toggle();
  $("#searchbox").fadeIn(1000);
  $("#searchclose").fadeIn(1000);
  $("footer").toggle();
  $("#searchbox").focus();
}

export default searchClick;