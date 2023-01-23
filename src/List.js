import React from 'react'

export default function List({ title, year, type, image }) {
    return (
        <div >
            <h1>{title}</h1>
            {/* <image src={image}/> */}
            <div>
                <img
                    src={image !== "N/A" ? image : "https://via.placeholder.com/400"}
                    alt={title}
                />
            </div>
            <p>{year}</p>
            <p>{type}</p>
            {/* <p>{Year}</p> */}
        </div>
    )
}
