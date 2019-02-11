$( "#Login" ).click(function() {

      var un = $( "#Username" ).val();
      var pw = $( "#Password" ).val();

      if( !$( "#Username" ).val() ) {
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Username is empty</div>';
      }
      if( !$( "#Password" ).val() ) {
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Password is empty</div>';
      }
      else{
      $.post( "/Login", { Username: un, Password: pw })
      .done(function( data ) {
      var obj = JSON.parse(data);
      console.log(obj.Logged);
      if(obj.Logged == false ) {
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Login Incorrect</div>';
      }
      if(obj.Logged == true ) {
        window.location.replace("/" + obj.Username );
      }
      });
    }
});
