function postComment(id) {

      var comment = $( "#comment" ).val();
      var aid = id;

      console.log(comment);
      $.post( "../advert/post", { Comment: comment, AdvertId: aid })
      .done(function( data ) {
        console.log(data);
      });
}
