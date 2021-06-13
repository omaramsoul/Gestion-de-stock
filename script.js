function GoToInforamtique () {
    var title = "Informatique et Multimedia";
    document.getElementById("nProducts").innerHTML = title;
}

function GoToHabillement () {
    var title = "Habillement et Bien Etre";
    document.getElementById("nProducts").innerHTML = title;
}

function GoToMaison () {
    var title = "Maison et Jardin";
    document.getElementById("nProducts").innerHTML = title;
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