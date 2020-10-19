import React from 'react'
import "semantic-ui-css/semantic.min.css"
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const MyMedsCard = (props) => {
    console.log(props)
//     return (
//         <div >
//             {/* <h3>{props.medObj.name}</h3>
//             <img src={props.medObj.image}/> */}

// <div className="cards" >
//   <div className="image">
//     <img src={props.medObj.image}/>
//   </div>
//   <div className="content">
//     <a className="header">{props.medObj.name}</a>
//     <div className="meta">
//       <span className="date">Joined in 2013</span>
//     </div>
//     <div className="description">
//       Kristy is an art director living in New York.
//     </div>
//   </div>
//   <div className="extra content">
//     <a>
//       <i className="user icon"></i>
//       22 Friends
//     </a>
//     </div>
// </div>

               
//         </div>
//     )
// }
return (

    <Card>
    <Image src={props.medObj.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.medObj.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.medObj.indication}</span>
      </Card.Meta>
      <Card.Description>
        <strong>Common Side Effects:</strong> {props.medObj.side_effects}
      </Card.Description>
    </Card.Content>
   
  </Card>


)
}
export default MyMedsCard;

