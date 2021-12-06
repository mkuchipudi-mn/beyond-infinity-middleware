import fetch from 'node-fetch';


var baseUrl = 'http://mnipdnaresh.modeln.com:8081/rest';
var notifUrl = '/data/NotifMsg/search';


class SearchService {
  public async search(cookie: string, searchRequest: any) {
  
    return fetch(baseUrl +notifUrl, {
      method: 'post',
      body: JSON.stringify(searchRequest),
      headers: { 'Content-Type': 'application/json', cookie },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}

export default SearchService;
