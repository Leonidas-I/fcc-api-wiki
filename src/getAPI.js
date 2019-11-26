import $ from 'jquery';

const getAPI = (event) => {
  if (event.keyCode === 13) {
    const keyword = $("#searchbox").val();
    const apilink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&limit=10&format=json&callback=?";

    $.ajax ({
      type: "GET",
      url: apilink,
      async: true,
      dataType: "json",
      success: function(json){
        $("#result").html("");
        for(let i=1;i<json[1].length;i++){
          $("#result").append("<li><div><a href=" + json[3][i] + " target='_blank'><div><h3 class='text-success'>" + json[1][i] + "</h3><p class='text-info'>" + json[2][i] + "</p></div></div></li>");
        }
      }
    });
  }
}

export default getAPI;