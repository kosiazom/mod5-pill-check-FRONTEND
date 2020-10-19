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
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>


)
}
export default MyMedsCard;

