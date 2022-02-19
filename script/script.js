$(document).ready(function(){

  $('#tableflip').click(function(){
    $('#tableflip').text('┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻');
  });

  $('#mainpage').click(function(){
    w3_close();
  });

});

// Open and close sidebar
function w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
}

function w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
}
