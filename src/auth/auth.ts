import fetch from 'node-fetch';

var baseUrl = 'http://mnipdmkuchipudi.modeln.com:5525/modeln/rest/';
var authUrl ="authenticate/session/login"
//const body = {"username" : "Administrator","password" : "Administrator"}

const getAuth = async (body : any) => {
  return fetch(baseUrl + authUrl, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
};

export default getAuth;