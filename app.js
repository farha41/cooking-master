fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(response => response.json())
.then(data =>  displayMeals(data.meals))

const displayMeals = mealData =>{
  const mealList = document.getElementById("mealList")
  for (let i = 0; i < mealData.length; i++) {
      const meal = mealData[i];
      const mealDiv = document.createElement('div')
      mealDiv.className = 'meal'
     
      const mealItems = `
           <img src="${meal.strMealThumb}">
           <h3 class="mealName">${meal.strMeal}</h3>
           <button onclick="displayMealDetail('${meal.strIngredient1}${meal.strIngredient2}${meal.strIngredient3}')">Details</button>
           
      `
      mealDiv.innerHTML = mealItems;
      mealList.appendChild(mealDiv);
  }
}   
    const searchBtn = document.getElementById("searchBtn")
    searchBtn.addEventListener("click",function(){
    const  searchMeal = document.getElementById("searchMeal").Value
    displayMeals(searchMeal,searchBtn)
    })
        
       
    