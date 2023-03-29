let meal;
let mealprice;
let mealSelected;

let drink;
let drinkprice;
let drinkSelected;

let dessert;
let dessertprice;
let dessertSelected;

function check_selection(mealSelected, drinkSelected, dessertSelected) {
    const button = document.querySelector('.button');
    if (mealSelected && drinkSelected && dessertSelected) {
      button.removeAttribute('disabled');
      enable_button();
    } else {
      button.setAttribute('disabled', '');
    }
  }

  function enable_button() {
    var button = document.querySelector(".button");
    button.removeAttribute("disabled");
    button.classList.add("enabled");
    button.querySelector("h2").textContent = "Fechar pedido!";
  }
  

function choosemeal1() {
    document.getElementById("meal1").style.borderColor = "green";
    document.getElementById("meal1").querySelector(".checkmark").style.display = "block";

    document.getElementById("meal2").style.borderColor = "transparent";
    document.getElementById("meal2").querySelector(".checkmark").style.display = "none";

    document.getElementById("meal3").style.borderColor = "transparent";
    document.getElementById("meal3").querySelector(".checkmark").style.display = "none";

    meal = "Frango Yin Yang";
    mealprice = 14.90;
    mealSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
    }
function choosemeal2() {
    document.getElementById("meal1").style.borderColor = "transparent";
    document.getElementById("meal1").querySelector(".checkmark").style.display = "none";

    document.getElementById("meal2").style.borderColor = "green";
    document.getElementById("meal2").querySelector(".checkmark").style.display = "block";

    document.getElementById("meal3").querySelector(".checkmark").style.display = "none";
    document.getElementById("meal3").style.borderColor = "transparent";

    meal = "Frango Yin Yang";
    mealprice = 14.90;
    mealSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
    }
function choosemeal3() {
    document.getElementById("meal1").style.borderColor = "transparent";
    document.getElementById("meal1").querySelector(".checkmark").style.display = "none";

    document.getElementById("meal2").querySelector(".checkmark").style.display = "none";
    document.getElementById("meal2").style.borderColor = "transparent";

    document.getElementById("meal3").querySelector(".checkmark").style.display = "block";
    document.getElementById("meal3").style.borderColor = "green";

    meal = "Frango Yin Yang";
    mealprice = 14.90;
    mealSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
    } 

function choosedrink1(){
    document.getElementById("drink1").style.borderColor = "green";
    document.getElementById("drink1").querySelector(".checkmark").style.display = "block";

    document.getElementById("drink2").style.borderColor = "transparent";
    document.getElementById("drink2").querySelector(".checkmark").style.display = "none";

    document.getElementById("drink3").style.borderColor = "transparent";
    document.getElementById("drink3").querySelector(".checkmark").style.display = "none";

    drink = "Coquinha gelada";
    drinkprice = 4.90;
    drinkSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
}
function choosedrink2(){
    document.getElementById("drink1").style.borderColor = "transparent";
    document.getElementById("drink1").querySelector(".checkmark").style.display = "none";

    document.getElementById("drink2").style.borderColor = "green";
    document.getElementById("drink2").querySelector(".checkmark").style.display = "block";

    document.getElementById("drink3").style.borderColor = "transparent";
    document.getElementById("drink3").querySelector(".checkmark").style.display = "none";

    drink = "Coquinha gelada";
    drinkprice = 4.90;
    drinkSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
}
function choosedrink3(){
    document.getElementById("drink1").style.borderColor = "transparent";
    document.getElementById("drink1").querySelector(".checkmark").style.display = "none";

    document.getElementById("drink2").style.borderColor = "transparent";
    document.getElementById("drink2").querySelector(".checkmark").style.display = "none";

    document.getElementById("drink3").style.borderColor = "green";
    document.getElementById("drink3").querySelector(".checkmark").style.display = "block";

    drink = "Coquinha gelada";
    drinkprice = 4.90;
    drinkSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
}
function choosedessert1(){
    document.getElementById("dessert1").style.borderColor = "green";
    document.getElementById("dessert1").querySelector(".checkmark").style.display = "block";

    document.getElementById("dessert2").style.borderColor = "transparent";
    document.getElementById("dessert2").querySelector(".checkmark").style.display = "none";

    document.getElementById("dessert3").style.borderColor = "transparent";
    document.getElementById("dessert3").querySelector(".checkmark").style.display = "none";

    dessert = "Pudim";
    dessertprice = 7.90;
    dessertSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);

}
function choosedessert2(){
    document.getElementById("dessert1").style.borderColor = "transparent";
    document.getElementById("dessert1").querySelector(".checkmark").style.display = "none";

    document.getElementById("dessert2").style.borderColor = "green";
    document.getElementById("dessert2").querySelector(".checkmark").style.display = "block";

    document.getElementById("dessert3").style.borderColor = "transparent";
    document.getElementById("dessert3").querySelector(".checkmark").style.display = "none";

    dessert = "Pudim";
    dessertprice = 7.90;
    dessertSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
}
function choosedessert3(){
    document.getElementById("dessert1").style.borderColor = "transparent";
    document.getElementById("dessert1").querySelector(".checkmark").style.display = "none";

    document.getElementById("dessert2").style.borderColor = "transparent";
    document.getElementById("dessert2").querySelector(".checkmark").style.display = "none";

    document.getElementById("dessert3").style.borderColor = "green";
    document.getElementById("dessert3").querySelector(".checkmark").style.display = "block";

    dessert = "Pudim";
    dessertprice = 7.90;
    dessertSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
}
function place_order(){
    if (!document.getElementById('order-button').classList.contains('enabled')) {
        return;
      }
    
    let total_order = mealprice + drinkprice + dessertprice;
    total_order = total_order.toFixed(2).replace(".", ",");

    let mensagem =
    "Olá, gostaria de fazer o pedido:\n" +
    "- Prato: " + meal + "\n" +
    "- Bebida: " + drink + "\n" +
    "- Sobremesa: " + dessert + "\n" +
    "Total: R$ " + total_order;
  
  window.open("https://wa.me/+5521999999999?text=" + encodeURIComponent(mensagem));
  
}