document.querySelector(".confirmButton").addEventListener("click", function(){
    document.querySelector(".confirmOrderPopUp").classList.add("active");
})

document.querySelector(".closeButton").addEventListener("click", function(){
    document.querySelector(".confirmOrderPopUp").classList.remove("active");
})