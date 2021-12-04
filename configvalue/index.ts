import fetch from 'node-fetch';
import getAuth from '../auth/auth';
import searchRequest from './search.json';

var baseUrl = 'http://mnipdmkuchipudi.modeln.com:7222/modeln/rest/';


const execute = async () => {
  const response = await getAuth();
  //console.log(searchResponse);
  const { cookie } = response;
  const searchResponse = await searchConfigurationData(cookie)
  console.log(JSON.stringify(searchResponse));
}

const searchConfigurationData = async (cookie) => {
  return fetch(baseUrl + 'data/ConfigurationValue/search', {
      method: "post",
      body: JSON.stringify(searchRequest),
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

execute();