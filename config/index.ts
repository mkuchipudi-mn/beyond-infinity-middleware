import fetch from 'node-fetch';
import getAuth from '../auth/auth';
import searchRequest from './search.json';
import configValueSearchRequest from './configvalueSearch.json';



var baseUrl = 'http://mnipdmkuchipudi.modeln.com:7222/modeln/rest/';
//var baseUrl = 'http://mnipdmkuchipudi.modeln.com:5525/modeln/rest/';



const execute = async () => {
  let response = await getAuth();
  //console.log(searchResponse);
  const searchResponse = await searchConfigurationData(response["cookie"])
  response = await getAuth();
  //console.log(searchResponse);
  const configValueSearchResponse = await searchConfigurationValueData(response["cookie"],searchResponse);
 // console.log(JSON.stringify(configValueSearchResponse));
  parseResponse(configValueSearchResponse);
 // console.log(JSON.stringify(configValueSearchResponse));
}

const searchConfigurationData = async (cookie) => {
  console.log()
  return fetch(baseUrl + 'data/Configuration/search', {
      method: "post",
      body: JSON.stringify(searchRequest),
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}
//

const searchConfigurationValueData = async (cookie,searchResponse) => {
  console.log(JSON.stringify(searchResponse));
  configValueSearchRequest['searchTermList'][0].attribute.value = searchResponse.data[0][0].value.pk;
  console.log(JSON.stringify(configValueSearchRequest));
  return fetch(baseUrl + 'data/ConfigurationValue/search', {
      method: "post",
      body: JSON.stringify(configValueSearchRequest),
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

const parseResponse = (configValueResponse) => {
 
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

execute();