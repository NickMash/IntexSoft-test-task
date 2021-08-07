export default class Helper {
  static prepareRowData (data: any) {
    return data.data.map((item: any) => {
      return {
        channelTitle: item.snippet.channelTitle,
        title: item.snippet.title,
        thumbnails: item.snippet.thumbnails.default.url,
        publishedAt: new Date(item.snippet.publishedAt).toLocaleString().slice(0,-3),
        description: item.snippet.description,
        videoId: item.id.videoId,
      };
    });
  }
}
