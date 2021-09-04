import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {

    const { setInput } = useGlobalContext()
    const searchValue = useRef("")

    const searchCocktail = () => {
        setInput(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        searchValue.current.focus()
    }, [])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search-cocktail">Search your Favourite Cocktail</label>
            <input 
                type="text" 
                id="search-cocktail" 
                name="search-cocktail"
                className="input-field" 
                ref={searchValue}
                onChange={searchCocktail}
            />
        </form>
    )

}


export default SearchForm
