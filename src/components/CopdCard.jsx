import React from 'react'



const CopdCard = (props) => {
    // console.log(props)
    return (
        <div>
            <h3>{props.copdMed.name}</h3>
            <img src={props.copdMed.image}/>
            
        </div>
    )
}

export default CopdCard
