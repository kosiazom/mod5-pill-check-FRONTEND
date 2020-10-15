import React from 'react'

const DiabetesCard = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.dmMed.name}</h3>
            <img src={props.dmMed.image} />
            
        </div>
    )
}

export default DiabetesCard
