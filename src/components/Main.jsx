import '../App.css'
import React from 'react';
import IngredientsList from './IngredientsList';
import ClaudRecipe from './claudRecipe';
import { getRecipeFromHF } from '../chef';
export default function Main(){
    const [ingredients,setIngredients]= React.useState([])

    const [recipe,setRecipe] = React.useState("")
    function addItems(formData){
        const item = formData.get("item")
        setIngredients(prev=>([...prev,item]))
    }
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromHF(ingredients)
        setRecipe(recipeMarkdown)
    }
    return(
        <main >
            <form className="main-Ingredient" action={addItems}>
                <input className='Ingredient-input'
                    aria-label="Add ingredient"
                    type="text"
                    name="item"
                    placeholder="e.g.olive oil"
                ></input>
                <button className='Ingredient-button'>Add ingredient</button>
            </form>
            {ingredients.length>0?<IngredientsList
                ingredients={ingredients}
                getRecipe={getRecipe}
            />:null}
            {recipe && <ClaudRecipe recipe={recipe}/>}

        </main>
    )
}