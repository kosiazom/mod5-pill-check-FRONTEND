import React from 'react'

const MyMedsCard = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.med.name}</h3>
            <img src={props.med.image} />
        </div>
    )
}

export default MyMedsCard

