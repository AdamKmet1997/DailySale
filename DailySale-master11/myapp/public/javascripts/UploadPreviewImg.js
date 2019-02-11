var loadFile = function(event) {
  $(':file').on('fileselect', function(event, numFiles, label) {
      console.log(numFiles);
      console.log(label);

      if(numFiles == 0){

      }else{
      document.getElementById('PreviewImg').innerHTML = '<br><h4>Images for advert</h4><br><img src="" id="PrevImg" height="200"><p>'+ label +'</p>'
      var reader = new FileReader();
      reader.onload = function(){
        var output = document.getElementById('PrevImg');
        output.src = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      }
  });
};

  $(document).on('change', ':file', function() {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
          input.trigger('fileselect', [numFiles, label]);
  });
