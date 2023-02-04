import React from 'react'

export default function List({ title, year, type, image}) {
    return (
        <div className='list'>
            <h1>{title.slice(0,18)}</h1>
            <div>
                <img
                    src={image !== "N/A" ? image : "https://via.placeholder.com/400"}
                    alt={title}
                />
            </div>
            <p>{year}</p>
            <p>{type}</p>
        </div>
    )
}
