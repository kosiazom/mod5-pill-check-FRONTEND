import React from 'react'
import "semantic-ui-css/semantic.min.css"
import { Button, Card, Image } from 'semantic-ui-react'

const MyMedsCard = (props) => {
    console.log(props)
//     return (
//         <div className="ui four cards">
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
<div>
<div>
<Card.Group >
    <Card >
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={props.medObj.image}
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    {/* <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card> */}
    {/* <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card> */}
  </Card.Group>
  </div>
</div>
)
}
export default MyMedsCard;

