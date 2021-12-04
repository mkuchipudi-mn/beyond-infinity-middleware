import fetch from 'node-fetch';
import getAuth from '../auth/auth';
import datasource from './search.json';

var baseUrl = 'http://mnipdmkuchipudi.modeln.com:7222/modeln/rest/';
//var baseUrl = 'https://ls-miami.lspd.modeln.com/modeln/rest/';

//var baseUrl = 'http://mnipdtarangini.modeln.com:7001/modeln/rest/';

const execute = async () => {
  const response = await getAuth();
  //console.log(searchResponse);
  const { cookie } = response;
  const searchResponse = await fetchDataSource(cookie)
  //const searchResponse = await createDataSource(cookie)
  console.log(JSON.stringify(searchResponse));
}

const createDataSource = async (cookie) => {
  return fetch(baseUrl + 'admin/cli/datasources/nodes', {
      method: "post",
      body: JSON.stringify(datasource),
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}



const updateDataSource = async (cookie) => {
  return fetch(baseUrl + 'admin/cli/datasources/nodes', {
      method: "put",
      body: JSON.stringify(datasource),
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}


const fetchDataSource = async (cookie) => {
  return fetch(baseUrl + 'admin/cli/xadatasources', {
      method: "get",
      headers: { "Content-Type": "application/json" , cookie}
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

execute();