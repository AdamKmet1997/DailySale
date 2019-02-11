$(document).ready(function(){
        $("#Price").on('keyup',function(){
          console.log("hello");
            var singleValues = $( "#Adverttitle" ).val();
            var desc = singleValues.split(' ').slice(0,2).join('%20');
            $.get('/advert/getDesc/'+ desc +'', function(data, status){
                $( "#Textarea" ).html(data.Desc)

                $( "#Avg" ).html(data.Mean)
            });
        });
});
