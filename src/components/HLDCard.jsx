import React from 'react'
import { Card, Image} from 'semantic-ui-react'

const HLDCard = (props) => {
    return (

        <div>
           
           <Card >
                <Image src={props.hldMed.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
                <Card.Content>
                <Card.Header>{props.hldMed.name}</Card.Header>
                
            
                </Card.Content>
            
            </Card>
         </div>
    )
}

export default HLDCard
