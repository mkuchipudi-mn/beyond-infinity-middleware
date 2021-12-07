import fetch from 'node-fetch';
import config from 'config';

var authUrl ="authenticate/session/login"
//const body = {"username" : "Administrator","password" : "Administrator"}

const getAuth = async (body: any) => {
  const baseUrl = config.get('serviceUrl');
  return fetch(baseUrl + authUrl, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
};

export default getAuth;