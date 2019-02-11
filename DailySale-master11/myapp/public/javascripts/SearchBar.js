$(document).ready(function(){
  $('.Slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  });
});

$(function() {

    var title = [];
    $.ajax({
            url: '/advert/get',
            contentType: 'application/json',
            success: function(response) {
                response.forEach(function({Name}) {
                    title.push(Name);
                  });
            }
    });

    $("#searchField").on('keyup',function(e){
        document.getElementById('SearchTable').innerHTML = "";
        var value = $(this).val().toLowerCase();
        Array.from(title).forEach(function(searchName){
          const Sname = searchName;
          if(Sname.toLowerCase().indexOf(value) != -1){
            if(document.getElementById('searchField').value === '' )
            {
              document.getElementById('SearchTable').innerHTML = "";
            }else{
              var x = document.getElementById("tableS").rows.length;
              console.log(x);
              if(x <= 2){
              document.getElementById('SearchTable').innerHTML += "<tr style=''><td style=''><a href='advert/search/"+searchName+"' style='color:black; font-size:20px; text-decoration:none;'> "+ searchName +" </a></td> </tr>";
              }
            }
          }
        })
    })

});
