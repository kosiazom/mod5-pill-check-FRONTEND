import React, {useState} from 'react';
import AsyncSelect from 'react-select/async'
import {Button} from 'semantic-ui-react'

const MyMeds = (props) => {

    const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [med, setMed] = useState([])
 

  const pickMeds = (e) => {
      setMed(e.target.value)
  }
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
 
    return (
        <div>
            <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
        
      />
      {/* <pre>Selected Value: {JSON.stringify(selectedValue, null, 2)}</pre> */}
      <Button onClick={(e) => }>Add Medication</Button>

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


