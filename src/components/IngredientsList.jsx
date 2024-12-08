export default function IngredientsList(props){
    const ingredientList = props.ingredients.map(ingredient=>{
        return(<li key={ingredient}>{ingredient}</li>)
    })
    return(
        <section className="getRecipe">
                <h2>Ingredients on hand:</h2>
                <ul>{ingredientList}</ul>
                {props.ingredients.length>3 && <div className='getRecipeContainer'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section>
    )
}