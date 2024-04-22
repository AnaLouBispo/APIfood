
const UrlIngredients =("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast ");

const main = document.getElementById("container");


fetch(UrlIngredients)
    .then(response => response.json())
    .then(data => ChickenList(data));
 
    function ChickenList(data){
    const dataArray = data.meals;
    dataArray.forEach(element => {

        const card = document.createElement("div");
        card.className = "cards";
        card.innerHTML = `
        <div>
        <img src="${element.strMealThumb}">
        <p> ${element.strMeal} </p>
        <p> ${element.idMeal} </p>
        </div>
        `;

        // "strMeal": "Chick-Fil-A Sandwich",
        // "strMealThumb": "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
        // "idMeal": "53016"
    
        main.appendChild(card);
       

    

    })
   


    }




      
      
     

