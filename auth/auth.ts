import fetch from 'node-fetch';

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

export default getAuth;