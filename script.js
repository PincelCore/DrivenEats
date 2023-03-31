let meal;
let mealprice;
let mealSelected;

let drink;
let drinkprice;
let drinkSelected;

let dessert;
let dessertprice;
let dessertSelected;

function enable_button() {
  var button = document.querySelector(".button");
  button.removeAttribute("disabled");
  button.classList.add("enabled");
  button.querySelector("h2").textContent = "Fechar pedido";
}

function check_selection(mealSelected, drinkSelected, dessertSelected) {
    const button = document.querySelector('.button');
    if (mealSelected && drinkSelected && dessertSelected) {
      button.removeAttribute('disabled');
      enable_button();
    } else {
      button.setAttribute('disabled', '');
    }
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
function open_whatsapp() {
  let total_order = mealprice + drinkprice + dessertprice;
  total_order = total_order.toFixed(2).replace(".", ",");

  const name = prompt('Informe seu nome: ');
  const adress = prompt('Informe seu endereço: ');

  let mensagem =
    "Olá, gostaria de fazer o pedido:\r\n" +
    "- Prato: " + meal + "\r\n" +
    "- Bebida: " + drink + "\r\n" +
    "- Sobremesa: " + dessert + "\r\n" +
    "Total: R$ " + total_order + "\r\n" +
    "\r\n" +
    "Nome: " + name + "\r\n" +
    "Endereço: " + adress

  window.open("https://wa.me/+5521999999999?text=" + encodeURIComponent(mensagem));
}

function place_order() {
  if (!document.getElementById('order-button').classList.contains('enabled')) {
    return;
  }

  const confirmationMenu = document.querySelector('.confirmation-menu');
  const pageCover = document.querySelector('.page-cover');
  const confirmButton = document.querySelector('#confirm-button');
  const cancelButton = document.querySelector('#cancel-button');

  pageCover.style.display = 'block';

  let total_order = mealprice + drinkprice + dessertprice;
  total_order = total_order.toFixed(2).replace(".", ",");

  document.getElementById("meal").innerHTML = meal;
  document.getElementById("drink").innerHTML = drink;
  document.getElementById("dessert").innerHTML = dessert;
  document.getElementById("meal-price").innerHTML = mealprice.toFixed(2).replace(".", ",");;
  document.getElementById("drink-price").innerHTML = drinkprice.toFixed(2).replace(".", ",");
  document.getElementById("dessert-price").innerHTML = dessertprice.toFixed(2).replace(".", ",");
  document.getElementById("total-price").innerHTML = total_order;

  confirmButton.addEventListener('click', open_whatsapp);

  cancelButton.addEventListener('click', function() {
    pageCover.style.display = 'none';
    confirmationMenu.style.display = 'none';
  });
  
  confirmationMenu.style.display = 'block';
}
