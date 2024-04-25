let checkboxSwitch = document.getElementById("switch");
/*let checkboxDark = document.getElementById("dark");*/
let priceBasic = document.getElementById("priceBasic");
let priceProfessional = document.getElementById("priceProfessional");
let priceMaster = document.getElementById("priceMaster");
checkboxSwitch.addEventListener('change', function() {
    if (checkboxSwitch.checked) {
        
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
document.addEventListener('DOMContentLoaded', () => {
    const checkboxDark = document.getElementById("dark");
    checkboxDark.addEventListener('change', function() {
        document.body.classList.toggle('darkMode', checkboxDark.checked);
        });
});
