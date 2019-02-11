$(document).ready(function(){
  $( "#AddAdvert" ).click(function(e) {
      e.preventDefault();
      console.log("Pressed");

      var fdata = new FormData();

      fdata.append("fileinput",$("fileinput").val());
      $.ajax({
        url: "/ImageUpload",
        type: "POST",
        data: fdata,
        processData: false,
        contentType: false,
        async: false,
        cache: false,
        success: function (res) {

        },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
             alert(errorThrown);
          }
      });

});

});
