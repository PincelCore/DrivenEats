let mealName;
let mealPrice;
let mealSelected;

let drinkName;
let drinkPrice;
let drinkSelected;

let dessertName;
let dessertPrice;
let dessertSelected;

let total_order;

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

  let selectedMeal = null;
  const meals = document.querySelectorAll(".meal");
  
  function chooseMeal(mealId) {
    if (selectedMeal !== null) {
      selectedMeal.style.borderColor = "transparent";
      selectedMeal.querySelector(".checkmark").style.display = "none";
    }
    const meal = document.getElementById(mealId);
    meal.style.borderColor = "green";
    meal.querySelector(".checkmark").style.display = "block";
    selectedMeal = meal;
  
    mealName = meal.querySelector("h4").innerText;
  
    mealPrice = Number.parseFloat(meal.querySelector(".price").innerText.replace("R$ ", "").replace(",", "."));

    mealSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
  }
  

  let selectedDrink = null;
  const drinks = document.querySelectorAll(".drink");
  
  function chooseDrink(drinkId) {
    if (selectedDrink !== null) {
      selectedDrink.style.borderColor = "transparent";
      selectedDrink.querySelector(".checkmark").style.display = "none";
    }
    const drink = document.getElementById(drinkId);
    drink.style.borderColor = "green";
    drink.querySelector(".checkmark").style.display = "block";
    selectedDrink = drink;
  
    drinkName = drink.querySelector("h4").innerText;
  
    drinkPrice = Number.parseFloat(drink.querySelector(".price").innerText.replace("R$ ", "").replace(",", "."));

    drinkSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
  }


  let selectedDessert = null;
  const desserts = document.querySelectorAll(".dessert");
  
  function chooseDessert(dessertId) {
    if (selectedDessert !== null) {
      selectedDessert.style.borderColor = "transparent";
      selectedDessert.querySelector(".checkmark").style.display = "none";
    }
    const dessert = document.getElementById(dessertId);
    dessert.style.borderColor = "green";
    dessert.querySelector(".checkmark").style.display = "block";
    selectedDessert = dessert;
  
    dessertName = dessert.querySelector("h4").innerText;
  
    dessertPrice = Number.parseFloat(dessert.querySelector(".price").innerText.replace("R$ ", "").replace(",", "."));

    dessertSelected = true;

    check_selection(mealSelected, drinkSelected, dessertSelected);
  }

  function open_whatsapp() {

    const name = prompt('Informe seu nome: ');
    const adress = prompt('Informe seu endereço: ');

    if (name.trim() === '' || adress.trim() === ''){
      alert("Insira um nome ou endereço correto");
      return;
    }

    let message =
      "Olá, gostaria de fazer o pedido:\r\n" +
      "- Prato: " + mealName + "\r\n" +
      "- Bebida: " + drinkName + "\r\n" +
      "- Sobremesa: " + dessertName + "\r\n" +
      "Total: R$ " + total_order + "\r\n" +
      "\r\n" +
      "Nome: " + name + "\r\n" +
      "Endereço: " + adress

    window.open("https://wa.me/+5521999999999?text=" + encodeURIComponent(message));
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

    total_order = (mealPrice + drinkPrice + dessertPrice).toFixed(2).replace(".", ",");

    document.getElementById("meal").innerHTML = mealName;
    document.getElementById("drink").innerHTML = drinkName;
    document.getElementById("dessert").innerHTML = dessertName;
    document.getElementById("meal-price").innerHTML = mealPrice.toFixed(2).replace(".", ",");;
    document.getElementById("drink-price").innerHTML = drinkPrice.toFixed(2).replace(".", ",");
    document.getElementById("dessert-price").innerHTML = dessertPrice.toFixed(2).replace(".", ",");
    document.getElementById("total-price").innerHTML = total_order;

    confirmButton.addEventListener('click', open_whatsapp);

    cancelButton.addEventListener('click', function() {
      pageCover.style.display = 'none';
      confirmationMenu.style.display = 'none';
    });
  
    confirmationMenu.style.display = 'block';
}
