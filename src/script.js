import $ from 'jquery';

function wiki(event){
  if (event.keyCode === 13){
    var keyword = $("#searchbox").val();
    var apilink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&limit=10&format=json&callback=?"

    $.ajax({
      type: "GET",
      url: apilink,
      async: true,
      dataType: "json",
      success: function(json){
        $("#result").html("");
        for(var i=1;i<json[1].length;i++){
          $("#result").append("<li><div><a href=" + json[3][i] + " target='_blank'><div><h3 class='text-success'>" + json[1][i] + "</h3><p class='text-warning'>" + json[2][i] + "</p></div></div></li><br>");
        }
      }
    });
  }  
}

var x = document.getElementById("searchicon");
var y = document.getElementById("searchbox");
var z = document.getElementById("searchclose");

function togglesearch(){
  x.style.display = 'none';
  y.style.display = 'inline-block';
  z.style.display = 'inline-block';
  $("#lastsentence").html('');
  $("#searchbox").focus();
}

function toggleicon(){
  x.style.display = 'inline-block';
  y.style.display = 'none';
  z.style.display = 'none';
  $("#result").html("");
  $("#lastsentence").html('Click icon to search');
}
