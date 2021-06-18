function goToURL(title) {
    var para = new URLSearchParams();
    para.append("title", title);
    location.href = 'http://127.0.0.1:5500/products.html?' + title;
}

function incrementNumber() {
    var number = 1;
    var qteNumber = ++number;
    document.getElementById("productQuantity").innerHTML = qteNumber;
}

(function(){
    $('#msbo').on('click', function(){
      $('body').toggleClass('msb-x');
    });
  }());



