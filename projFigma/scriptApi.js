const urlFood = "https://www.themealdb.com/api/json/v1/1/categories.php";
const main = document.getElementById("cardFood");

fetch(urlFood)
  .then((response) => response.json())
  .then((data) => cardsFood(data));

function cardsFood(data) {
  const dataArray = data.categories;

  dataArray.forEach((element) => {
    const card = document.createElement("div");
    card.className = "cards";
    card.innerHTML = `
        <div class="slide-container">
            <div class="slide-content">
                <div class="card-wrapper">
                    <div class="card">
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="${element.strCategoryThumb}" alt="${element.strCategory}" class="card-img"><!--colocar inf sobre -->
                            </div>
                        </div>
 
                        <div class="card-content">
                            <h2 class="name">${element.strCategory}</h2>
                            <p class="descricao">${element.strCategoryDescription}</p>
                            <button class="button-card">Ver Receitas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    main.appendChild(card);

    const button = card.querySelector(".button-card"); // Changed "button-card" to ".button-card"

    button.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
  });
}
