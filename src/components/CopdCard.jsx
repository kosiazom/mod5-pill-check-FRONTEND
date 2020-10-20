import React from 'react'
import { Card, Image } from 'semantic-ui-react'



const CopdCard = (props) => {
    // console.log(props)
    return (
        
        
       
        <Card >
        <Image src={props.copdMed.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
        <Card.Content>
          <Card.Header>{props.copdMed.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{null}</span>
          </Card.Meta>
          <Card.Description>
             {null}
          </Card.Description>
        </Card.Content>
       
      </Card>
                
                
                )
            }
            
            export default CopdCard
            
           