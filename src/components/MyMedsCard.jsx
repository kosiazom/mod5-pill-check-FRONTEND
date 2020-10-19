import React from 'react'

const MyMedsCard = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.medObj.name}</h3>
            <img src={props.medObj.image}/>
        </div>
    )
}

export default MyMedsCard

