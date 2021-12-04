import fetch from 'node-fetch';


var baseUrl = 'http://mnipdmkuchipudi.modeln.com:5525/modeln/rest/';

class SearchService {
  public async search(cookie: string, searchRequest: any) {
    return fetch(baseUrl + 'data/IndirectSaleOpen/search', {
      method: 'post',
      body: JSON.stringify(searchRequest),
      headers: { 'Content-Type': 'application/json', cookie },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}

export default SearchService;
