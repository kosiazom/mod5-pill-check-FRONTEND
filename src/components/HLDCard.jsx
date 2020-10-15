import React from 'react'

const HLDCard = (props) => {
    return (
        <div>
            <h3>{props.hldMed.name}</h3>
            <img src={props.hldMed.image} />
        </div>
    )
}

export default HLDCard
