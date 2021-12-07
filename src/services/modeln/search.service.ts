import fetch from 'node-fetch';
import config from 'config';

class SearchService {
  public async search(cookie: string, notifUrl: string, searchRequest: any) {
    const baseUrl = config.get('serviceUrl');
    const url : string = baseUrl + notifUrl;
    console.log(url)
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(searchRequest),
      headers: { 'Content-Type': 'application/json', cookie },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}

export default SearchService;
