import React, { useState, useEffect, useContext, useCallback } from "react"


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext()


const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [input, setInput] = useState("r")
    const [cocktails, setCocktails] = useState([])

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(url + input)
            const data = await response.json()
            const {drinks} = data
            if(drinks) {
                const newCocktails = drinks.map(item => {
                    const {idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass} = item
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        type: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails)
            }
            else {
                setCocktails([])
            }
            setLoading(false)
        }
        catch(error) {
            setLoading(false)
            console.log(error)
        }
    }, [input])

    useEffect(() => {
        fetchData()
    }, [input, fetchData])

    return (
    
        <AppContext.Provider 
            value={{
                loading,
                setInput,
                cocktails
            }}
        >
            {children}
        </AppContext.Provider>
    )

}


const useGlobalContext = () => {

    return useContext(AppContext)

}


export { AppProvider, useGlobalContext }