import configValueResponse from './configValueResponse.json';


const parseResponse = () => {
 
  //const responseData = configValueResponse.data[0];
 // console.log(responseData.length);
  configValueResponse.data.forEach(responseData => {
    responseData.forEach(data => {
      if (data.name === 'Value' && typeof(data.value) === 'string') {
        const valueObject = JSON.parse(data.value)
        console.log(valueObject["ClobValue"]["LogMgrInit"]);
      }
    })
  });
}

parseResponse();