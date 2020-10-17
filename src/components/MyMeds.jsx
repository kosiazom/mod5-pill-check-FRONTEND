import React, {useState, useEffect} from 'react';
import AsyncSelect from 'react-select/async'
import {Button} from 'semantic-ui-react'
import MyMedsCard from './MyMedsCard'
import {Form} from 'semantic-ui-react'

const MyMeds = (props) => {
  
  // /api/v1/user_medications(.:format)
 const userMeds =`http://localhost:3000/api/v1/user_medications`
  const url = `http://localhost:3000/api/v1/users/`
  // /api/v1/users/:user_id/medications

    const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [med, setMed] = useState([])
 

  useEffect(() => {
    fetch(url + localStorage.id, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
    }) 
    .then(res => res.json() )
    .then(userMeds => setMed(userMeds.medications))
  }, [])
  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };
 
  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }
 
  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://localhost:3000/api/v1/medications?name=${inputValue}`)
           .then(res => res.json())
          
  };

  const createMyMeds = (e) => {
    e.preventDefault()

    fetch(userMeds, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        // name: selectedValue.name,
        // drug_class: selectedValue.drug_class,
        // side_effects: selectedValue.side_effects,
        // indication: selectedValue.indication,
        // image: selectedValue.image,
        user_id: localStorage.id,
        medication_id: selectedValue.id
      })
    })
    .then(res => res.json())
    // .then(myDrug => setMed([...med, myDrug]))
    .then(selectedValue =>setMed([...med, selectedValue]))
  } 
 
    return (
        <div>
            {/* <pre>Input Value: "{inputValue}"</pre> */}
            <Form onSubmit={(e) => createMyMeds(e)}>
      <AsyncSelect 
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
        // onClick={(e) => createMyMeds(e)}
        
      />
      {/* <pre>Selected Value: {JSON.stringify(selectedValue, null, 2)}</pre> */}
      <Button >Add Medication</Button><br/>
      </Form>

       <div>
       {med.map(medObj => <MyMedsCard medObj={medObj} />)}
      </div>
     
        </div>
    )
}

export default MyMeds


// class MyMeds extends PureComponent {

//     state = {
//         selectedMeds: [],
//         // inputValue: ''
//     }

//     // handleInputChange =value => {
//     //     this.setState({
//     //         inputValue: value
//     //     })
//     // }
//     handleOnChange = selectedMeds => {
//         this.setState({
//             selectedMeds: selectedMeds
//         })
//     }

//     loadOptions=async (inputText, callback) => {
//         const response = await fetch(`http://localhost:3000/api/v1/medications?name=${inputText}`)
//         const json=await response.json()

//         callback(json.map(i=>({label:i.name, value: i.id})))
//     }
//     // loadOptions = (inputValue) => {
//     //     return fetch(`http://localhost:3000/api/v1/medications?name=${inputValue}`).then(res => res.json())
       
//     // }
  

//     render() {
//         return (
//             <div>
//             {/* <pre>Input Value: "{this.state.handleInputChange}" </pre> */}
//                 <AsyncSelect 
//                 cacheOptions
//                 defaultOptions
//                  value={this.state.selectedMeds}
//                  handleOnChange={this.handleOnChange}
//                 //  getOptionLabel={e => e.name}
//                 //  getOptionValue={e => e.id}
//                  handleInputChange={this.handleInputChange}
//                  placeholder={'Search for medications ...'}
//                  loadOptions={this.loadOptions}
                
//                 />
//                   {/* <pre>Selected Value: {JSON.stringify(this.state.selectedMeds || {}, null, 2)}</pre> */}
//             </div>
//         );
//     }
// }

// export default MyMeds;


