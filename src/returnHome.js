import $ from 'jquery';

const returnHome = () => {
  $("#searchicon").fadeIn(1000);
    $("#wikiicon").fadeIn(1000);
    $("#searchbox").toggle();
    $("#searchbox").val("");
    $("#searchclose").toggle();
    $("#result").html("");
    $("footer").fadeIn(1000, 'linear');
}

export default returnHome;