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
document.querySelector("#deletePopUp1").addEventListener("click", function(){
    document.querySelector(".deleteProductPopUp").classList.add("active");
})
document.querySelector("#deletePopUp2").addEventListener("click", function(){
    document.querySelector(".deleteProductPopUp").classList.add("active");
})
document.querySelector("#deletePopUp3").addEventListener("click", function(){
    document.querySelector(".deleteProductPopUp").classList.add("active");
})
document.querySelector(".deleteProductPopUp").addEventListener("click", function(){
    document.querySelector(".deleteProductPopUp").classList.remove("active");
})


//The promorion product pop up :
document.querySelector("#promotionPopUp").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.add("active");
})
document.querySelector("#promotionPopUp1").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.add("active");
})
document.querySelector("#promotionPopUp2").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.add("active");
})
document.querySelector("#promotionPopUp3").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.add("active");
})
document.querySelector(".promotionProductPopUp .closeBtnPromotion").addEventListener("click", function(){
    document.querySelector(".promotionProductPopUp").classList.remove("active");
})

//The modification product pop up :
document.querySelector("#updatePopUp").addEventListener("click", function(){
    document.querySelector(".UpdateProductPopUp").classList.add("active");
})
document.querySelector("#updatePopUp1").addEventListener("click", function(){
    document.querySelector(".UpdateProductPopUp").classList.add("active");
})
document.querySelector("#updatePopUp2").addEventListener("click", function(){
    document.querySelector(".UpdateProductPopUp").classList.add("active");
})
document.querySelector("#updatePopUp3").addEventListener("click", function(){
    document.querySelector(".UpdateProductPopUp").classList.add("active");
})
document.querySelector(".UpdateProductPopUp .closeBtn").addEventListener("click", function(){
    document.querySelector(".UpdateProductPopUp").classList.remove("active");
})


function addProduct() {

    var updatePopUp = 3;
    var promotionPopUp = 3;

    var productName = document.getElementById('productNameInput').value;
    var productDescription = document.getElementById('productDescriptionInput').value;
    var productQuantity = document.getElementById('productQuantityInput').value;
    var productPrice = document.getElementById('productPriceInput').value;
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell2.innerHTML = "-----";
    cell3.innerHTML = productName;
    cell4.innerHTML = "-----";
    cell5.innerHTML = productQuantity;
    cell4.innerHTML = "-----";
    cell6.innerHTML = productPrice;
    cell8.innerHTML = "<button class=" + '"deletebtn"' + "id=" + '"updatePopUp' + ++updatePopUp + '"' + "><i class=" + '"fas fa-cog"' + "></i></button>" + " " +
                      "<button class=" + '"deletebtn"' + "id=" + '"promotionPopUp' + ++promotionPopUp + '"' + "><i class=" + '"fas fa-tag"' + "></i></button>";
    
    document.querySelector("#updatePopUp4").addEventListener("click", function(){
        document.querySelector(".UpdateProductPopUp").classList.add("active");
    })

}




