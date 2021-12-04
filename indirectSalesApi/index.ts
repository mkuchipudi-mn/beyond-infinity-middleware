import fetch from 'node-fetch';
import searchRequest from './search.json';

var baseUrl = 'http://mnipdmkuchipudi.modeln.com:7222/modeln/rest/';
var authUrl ="authenticate/session/login"
const body = {"username" : "Administrator","password" : "Administrator"}

const getAuth = async () => {
  return fetch(baseUrl + authUrl, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      return { cookie : res.headers.raw()['set-cookie']}
    })
    .then(json => {
      console.log("fetch node ts data");
      console.log(json)
      return json;
    })
    .catch(err => console.log(err))
};

const execute = async () => {
  const response = await getAuth();
  //console.log(searchResponse);
  const { cookie } = response;
  const searchResponse = await searchIndirectSaleData(cookie)
  console.log(JSON.stringify(searchResponse));
}

const searchIndirectSaleData = async (cookie) => {
  return fetch(baseUrl + 'data/IndirectSaleOpen/search', {
      method: "post",
      body: JSON.stringify(searchRequest),
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

execute();