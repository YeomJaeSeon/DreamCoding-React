export default class Youtube {
  constructor(key) {
    this.key = key;
    this.ReQuestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=10&chart=mostPopular&key=${this.key}`,
      this.ReQuestOptions
    );
    const result = await response.json();
    return result.items;
  }
  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=${query}&key=${this.key}`,
      this.ReQuestOptions
    );
    const result = await response.json();
    const searchResult = result.items
      .filter((item) => item.id.kind !== 'youtube#channel')
      .map((item_1) => {
        return { ...item_1, id: item_1.id.videoId };
      });
    return searchResult;
  }
}
