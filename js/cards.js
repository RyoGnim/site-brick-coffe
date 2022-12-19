import dataSet from "./modules/data.js";

dataSet.forEach((food)=>{
    const cardDeck=document.querySelector('.card-deck')

    const card=createFoodCard(food)

    cardDeck.insertAdjacentHTML('beforeend',card)
})


function createFoodCard(food){
    return `<div class="flex-row card-food col-sm-6 col-lg-4 col-xl-3 mb-3">
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        <span class="food-name">
          ${food.name}
        </span>
      </div>
      <div class="card-body p-0">
        <img src="${food.src}" alt="${food.name}" class="food-image w-100">
      </div>
    </div>
  </div>`

}