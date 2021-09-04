import React from 'react'
import { Link } from 'react-router-dom'


const Cocktail = ({id, name, image, type, glass}) => {

    return (
        <article className="cocktail">
            <img src={image} alt={name} className="cocktail-image" />
            <div className="cocktail-info">
                <h2 className="cocktail-name">{name}</h2>
                <h4 className="cocktail-glass">{glass}</h4>
                <p className="cocktail-type">{type}</p>
                <Link to={`/cocktail/${id}`} className="button">Details</Link>
            </div>
        </article>
    )

}


export default Cocktail
