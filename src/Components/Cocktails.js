import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const Cocktails = () => {

    const { cocktails, loading } = useGlobalContext()

    if(loading) {
        return <Loading />
    }

    if(cocktails.length === 0) {
        return <h2 className="error-title">No Cocktails matched your Search</h2>
    }

    return (
        <section className="cocktails-section">
            {
                cocktails.map(item => <Cocktail key={item.id} {...item} />)
            }
        </section>
    )

}


export default Cocktails
