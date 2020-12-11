//youtube.js는 이제 완전히 youtube에서 뭘받는지만 나타내는
//모듈이되었다. - 깔끔한 의존성 주입

export default class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }
  async mostPopular() {
    //axios자체에서 json()으로 변환해준다.
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 15,
      },
    });
    return response.data.items;
  }
  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 16,
        q: query,
      },
    });
    return response.data.items
      .filter((item) => item.id.kind !== 'youtube#channel')
      .map((item) => {
        return {
          ...item,
          id: item.id.videoId,
        };
      });
  }
}
