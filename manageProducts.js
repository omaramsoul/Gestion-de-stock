//The AddProduct Ppop up :
document.querySelector("#AddProductWindow").addEventListener("click", function(){
    document.querySelector(".AddProductPopUp").classList.add("active");
})

document.querySelector(".AddProductPopUp .closeBtn").addEventListener("click", function(){
    document.querySelector(".AddProductPopUp").classList.remove("active");
})

$('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

//The delete product pop up :
document.querySelector("#deletePopUp").addEventListener("click", function(){
    document.querySelector(".deleteProductPopUp").classList.add("active");
})

document.querySelector(".deleteProductPopUp").addEventListener("click", function(){
    document.querySelector(".deleteProductPopUp").classList.remove("active");
})

//The promorion product pop up :
document.querySelector("#promotionPopUp").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.add("active");
})

document.querySelector(".promotionProductPopUp .closeBtnPromotion").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.remove("active");
})




