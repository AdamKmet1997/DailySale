$(function() {
    $.ajax({
            url: '/advert/LatestAdverts',
            contentType: 'application/json',
            success: function(response) {
                response.forEach(function({Price,Img,Name,Location}) {
                  document.getElementById('LatestAds').innerHTML += '<div class="col-sm-2" style=" width:25%; "><div style="background:white; border-radius:10px; border:1px solid #343434; height: 400px; overflow: hidden; "><div style="height:50%; overflow: hidden; width:100%;"><img src='+ Img +' alt="proimg" style="width:100%; margin-top:-20px;"></div><h3 style="margin-left:15px;">'+ Name +'</h3><p style="margin-left:15px;">'+ Location +' . 5 mins</p><h3 style="position: absolute; bottom: 0; margin-left:15px;"><strong>&euro; '+ Price +'<strong><h3></div>';
                });
            }
            });
});
