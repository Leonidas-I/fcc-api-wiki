import $ from 'jquery';
import 'bootstrap';

$(document).ready(() => {
  $("#searchicon").click(() => {
    $("#searchicon").style.display = 'none';
    $("#searchbox").style.display = 'inline-block';
    $("#searchclose").style.display = 'inline-block';
    $("footer").hide("fast");
    $("#searchbox").focus();
  });
  
  $("#searchclose").click(() => {
    $("#searchicon").style.display = 'inline-block';
    $("#searchbox").style.display = 'none';
    $("#searchclose").style.display = 'none';
    $("#result").html("");
    $("footer").show("slow");
  });
  
  $("#searchbox").keydown((event) => {
    if (event.keyCode === 13){
      const keyword = $("#searchbox").val();
      const apilink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&limit=10&format=json&callback=?"
  
      $.ajax({
        type: "GET",
        url: apilink,
        async: true,
        dataType: "json",
        success: function(json){
          $("#result").html("");
          for(let i=1;i<json[1].length;i++){
            $("#result").append("<li><div><a href=" + json[3][i] + " target='_blank'><div><h3 class='text-success'>" + json[1][i] + "</h3><p class='text-warning'>" + json[2][i] + "</p></div></div></li><br>");
          }
        }
      });
    }  
  });
});