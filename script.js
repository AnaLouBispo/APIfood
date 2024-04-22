const urlFood = "https://www.themealdb.com/api/json/v1/1/categories.php";
const main = document.getElementById("cardFood");

const urlSalmon = "https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon";
const mainSalmon = document.getElementById("salmon");

const urlPork = "https://www.themealdb.com/api/json/v1/1/filter.php?i=pork";
const mainPork = document.getElementById("pork");

const urlChicken = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
const mainChicken = document.getElementById("chicken");

const urlBeef = "https://www.themealdb.com/api/json/v1/1/filter.php?i=beef";
const mainBeef = document.getElementById("beef");


window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});

fetch(urlFood)
  .then((response) => response.json())
  .then((data) => cardsFood(data));

function cardsFood(data) {
  const dataArray = data.categories;

  let number = 0;

  dataArray.forEach((element) => {
    number++;
    const card = document.createElement("div");
    card.className = "cards";
    card.innerHTML = `
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card" id="card-${number}">
                        <div class="image-content" id="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="${element.strCategoryThumb}" alt="${element.strCategory}" class="card-img"><!--colocar inf sobre -->
                            </div>
                        </div>
                        <div class="card-content" id="card-content-${number}">
                            <h2 class="name">${element.strCategory}</h2>
                            <p class="descricao">${element.strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    main.appendChild(card);
  });

  let number2 = 0;
  dataArray.forEach((e) => {
    number2++;
    var nome = `card-${number2}`;
    const image = document.getElementById(nome);

    var click = `card-content-${number2}`;

    image.addEventListener("click", () => {
      if (document.getElementById(click).style.display === "flex") {
        document.getElementById(click).style.display = "none";
      } else{
        document.getElementById(click).style.display = "flex";
      }
    });
  });
}

/* document.getElementById("image-content").addEventListener("mouseover", () => {
    console.log("dsadsasdadas");
});
 */

fetch(urlSalmon)
    .then(response => response.json())
    .then(salmon => cardSalmon(salmon));

function cardSalmon(salmon){
    const salmonArray = salmon.meals;
    salmonArray.forEach(salmon=> {
        const div = document.createElement("div");
        div.className = "cardSalmon";
        div.innerHTML = `
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="${salmon.strMealThumb}" alt="${salmon.strMeal}" class="card-img"><!--colocar inf sobre -->
                            </div>
                        </div>
                        <div class="card-content">
                            <h2 class="name">${salmon.strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainSalmon.appendChild(div);
    });
}


fetch(urlPork)
    .then(response => response.json())
    .then(pork => cardPork(pork));

function cardPork(pork){
    const porkArray = pork.meals;
    porkArray.forEach(pork => {
        const div = document.createElement("div");
        div.className = "cardPork";
        div.innerHTML = `
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="${pork.strMealThumb}" alt="${pork.strMeal}" class="card-img"><!--colocar inf sobre -->
                            </div>
                        </div>
                        <div class="card-content">
                            <h2 class="name">${pork.strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainPork.appendChild(div);
    });
}

fetch(urlChicken)
    .then(response => response.json())
    .then(chicken => cardChicken(chicken));

function cardChicken(chicken){
    const chickenArray = chicken.meals;
    chickenArray.forEach(chicken => {
        const div = document.createElement("div");
        div.className = "cardsChicken";
        div.innerHTML = `
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="${chicken.strMealThumb}" alt="${chicken.strMeal}" class="card-img"><!--colocar inf sobre -->
                            </div>
                        </div>
                        <div class="card-content">
                            <h2 class="name">${chicken.strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainChicken.appendChild(div);
    });
}

fetch(urlBeef)
    .then(response => response.json())
    .then(beef => cardBeef(beef));

function cardBeef(beef){
    const beefArray = beef.meals;
    beefArray.forEach(beef => {
        const div = document.createElement("div");
        div.className = "cardBeef";
        div.innerHTML = `
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="${beef.strMealThumb}" alt="${beef.strMeal}" class="card-img"><!--colocar inf sobre -->
                            </div>
                        </div>
                        <div class="card-content">
                            <h2 class="name">${beef.strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainBeef.appendChild(div);
    });
}