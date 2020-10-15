import React from 'react'

const HTNCard = (props) => {
    return (
        <div>
            <h3>{props.htnMed.name}</h3>
            <img src={props.htnMed.image}/>
        </div>
    )
}

export default HTNCard
