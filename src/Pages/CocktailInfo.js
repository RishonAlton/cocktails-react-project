import React, { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../Components/Loading'


const CocktailInfo = () => {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [cocktail, setCocktail] = useState(null)

    const fetchInfo = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(url + id)
            const data = await response.json()
            const { drinks } = data
            if(drinks) {
                const { 
                    strDrink: name, 
                    strDrinkThumb: image,
                    strCategory: category,
                    strAlcoholic: type,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                    strIngredient11,
                    strIngredient12,
                    strIngredient13,
                    strIngredient14,
                    strIngredient15
                } = drinks[0]
                const ingredients = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                    strIngredient11,
                    strIngredient12,
                    strIngredient13,
                    strIngredient14,
                    strIngredient15
                ]
                const newCocktail = { name, image, category, type, glass, instructions, ingredients }
                setCocktail(newCocktail)
            }
            else {
                setCocktail(null)
            }
        }
        catch(error) {
            console.log(error)
        }
        setLoading(false)
    }, [id])

    useEffect(() => {
        fetchInfo()
    }, [id, fetchInfo])

    if(loading) {
        return <Loading />
    }

    if(!cocktail) {
        return (
            <main className="error-page">
                <h2 className="error-title">No Cocktail to Display</h2>
                <Link to="/" className="button">Back Home</Link>
            </main>
        )
    }

    else {
        const { name, image, category, type, glass, instructions, ingredients } = cocktail
        return (
            <main className="cocktail-info-section">
                <img src={image} alt={name} />
                <section className="cocktail-info-container">
                    <ul className="cocktail-details">
                        <li>
                            <span>Name</span>
                            {name}
                        </li>
                        <li>
                            <span>Category</span>
                            {category}
                        </li>
                        <li>
                            <span>Type</span>
                            {type}
                        </li>
                        <li>
                            <span>Glass</span>
                            {glass}
                        </li>
                        <li>
                            <span>Instructions</span>
                            {instructions[0].toUpperCase() + instructions.slice(1)}
                        </li>
                        <li>
                            <span>Ingredients</span>
                            <ul className="cocktail-ingredients">
                                {
                                    ingredients.map((item, index) => {
                                        return item ? <li key={index}>{item}</li> : null
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        )
        }

}


export default CocktailInfo
