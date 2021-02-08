
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(response => response.json())
.then(data =>  displayMeals(data.meals))


const findMeal = () =>{
  const mealInput = document.getElementById("mealInput").Value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
  fetch(url)
  .then(res => res.json())
  .then(data =>  displayMeals(data.meals))
 
}

const displayMeals = mealData =>{
  const mealList = document.getElementById("mealList")
  for (let i = 0; i < mealData.length; i++) {
      const meal = mealData[i];
      const mealDiv = document.createElement('div')
      mealDiv.className = 'meal'
     
      const mealItems = `
           <img src="${meal.strMealThumb}">
           <h3 class="mealName">${meal.strMeal}</h3>
           <button onclick="displayMealDetail('${meal.strIngredient1} ${meal.strIngredient2} ${meal.strIngredient3} ${meal.strIngredient4} ${meal.strIngredient5} ${meal.strIngredient6} ${meal.strIngredient7} ${meal.strIngredient8} ${meal.strIngredient9} ${meal.strIngredient10}')">Details</button>
           
      `
     
      mealDiv.innerHTML = mealItems;
      mealList.appendChild(mealDiv);
  }
}   
   
const displayMealDetail = strIngredient =>{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(response => response.json())
  .then(data => showIngredient(data.meals));
}
const showIngredient = mealItem =>{
  const ingredientList = document.getElementById("ingredientList")
  for (let i = 0; i < mealItem.length; i++) {
    const menuItem = mealItem[i];
  ingredientList.innerHTML = `
       <li>${menuItem.strIngredient}</li>
       <li>${menuItem.strIngredient2}</li>
       <li>${menuItem.strIngredient3}</li>
       <li>${menuItem.strIngredient4}</li>
       <li>${menuItem.strIngredient5}</li>
       <li>${menuItem.strIngredient6}</li>
       <li>${menuItem.strIngredient7}</li>
       <li>${menuItem.strIngredient8}</li>
       <li>${menuItem.strIngredient9}</li>
  
  
  `
  }
}