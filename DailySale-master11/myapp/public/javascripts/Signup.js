$( "#SignUp" ).click(function() {

      var name = $( "#Name" ).val();
      var lname = $( "#LastName" ).val();
      var username = $( "#Usernames" ).val();
      var email = $( "#Email" ).val();
      var password = $( "#Passwords" ).val();
      var address = $( "#Address" ).val();
      var address1 = $( "#Address1" ).val();
      var city = $( "#City" ).val();
      var counties = $( "#Counties" ).val();

      $.post( "/Sign", { Usernamez: username, Passwordz: password ,FirstName: name,LastName: lname ,Email: email, Password: password ,Address: address, Address1: address1, City: city ,Counties: counties })
      .done(function( data ) {
        var obj = JSON.parse(data);
        if(obj.Signed == true ) {
          window.location.replace("/");
        }
      });
});
