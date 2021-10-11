import React from "react";
import day from "./date";

const year = day();  
const food = {
    pasta:'pasta',
    chicken:'chicken',
    coco:'choclate'
  };
  
  function myFoods(food){
    return food;
  }
  
    
export default function App(){
  return (
    <div>
      <h1 >My favorite food</h1>
      <li> {myFoods(food.chicken)}</li>
      <li> {myFoods(food.pasta)}</li>
      <li> {myFoods(food.coco)}</li>
      <p class="test">&copy; {year}</p>  
    </div>    
  );
}



