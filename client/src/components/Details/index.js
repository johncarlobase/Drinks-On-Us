import React from 'react';
import API from "../../Utils/API";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: this.props.details,
    idSearch: "idDrink", 
  };
 


//   drinksMap = (details) => {
//     let result = {}
//     for (const key in details) {
//         if (details.hasOwnProperty(key)) {
//             const element = details[key]
//             if (element) {
//                 result[key] = element
//             }
//         }
//     }
//     return result
// }


render() {
    return (
<div>

  <ul>

       { this.state.details.map(detail => 



        <div key = {detail.idDrink}>

        <li>Drink : {detail.strDrink}</li> 
        <li>Category : {detail.strCategory}</li>
        <li>Type : {detail.strAlcoholic}</li>
        <li>Served In : {detail.strGlass}</li>
        <li>Instructions : {detail.strInstructions}</li>
        <li>Ingredient1 : {detail.strIngredient1}  -  {detail.strMeasure1}</li>
        <li>Ingredient2 : {detail.strIngredient2}  -  {detail.strMeasure2}</li>
        <li>Ingredient3 : {detail.strIngredient3}  -  {detail.strMeasure3}</li>
        <li>Ingredient4 : {detail.strIngredient4}  -  {detail.strMeasure4}</li>
        <li>Ingredient5 : {detail.strIngredient5}  -  {detail.strMeasure5}</li>
        <li>Ingredient6 : {detail.strIngredient6}  -  {detail.strMeasure6}</li>
        <li>Ingredient7 : {detail.strIngredient7}  -  {detail.strMeasure7}</li>
        <li>Ingredient8 : {detail.strIngredient8}  -  {detail.strMeasure8}</li>
        <li>Ingredient9 : {detail.strIngredient9}  -  {detail.strMeasure9}</li>
        <li>Ingredient10 : {detail.strIngredient10} -  {detail.strMeasure10}</li>
        <li>Ingredient11 : {detail.strIngredient11}  - {detail.strMeasure11}</li>
        <li>Ingredient12 : {detail.strIngredient12}  - {detail.strMeasure12}</li>
        <li>Ingredient13 : {detail.strIngredient13}  - {detail.strMeasure13}</li>
        <li>Ingredient14 : {detail.strIngredient14}  - {detail.strMeasure14}</li>
        <li>Ingredient15 : {detail.strIngredient15}  - {detail.strMeasure15}</li>

      </div>)}
  </ul>

</div>
    );
  }
}
