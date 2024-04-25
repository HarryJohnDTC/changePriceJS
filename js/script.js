let checkbox = document.getElementById("switch");
let priceBasic = document.getElementById("priceBasic");
let priceProfessional = document.getElementById("priceProfessional");
let priceMaster = document.getElementById("priceMaster");
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        
        priceBasic.innerHTML = "$ 19.99";
        priceProfessional.innerHTML = "$ 24.99";
        priceMaster.innerHTML = "$ 39.99";
    } 
    else {
        priceBasic.innerHTML = "$ 199.99";
        priceProfessional.innerHTML = "$ 249.99";
        priceMaster.innerHTML = "$ 399.99";
    }
});