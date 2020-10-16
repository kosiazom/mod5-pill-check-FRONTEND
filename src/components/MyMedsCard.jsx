import React from 'react'

const MyMedsCard = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.med.name}</h3>
        </div>
    )
}

export default MyMedsCard

