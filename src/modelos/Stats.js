class Stats {
    constructor(id,artistId,month_listeners,day_play_songs,year_followers) {
      this.id = id;
      this.artistId = artistId;
      this.month_listeners = month_listeners;
      this.day_play_songs = day_play_songs;
      this.year_followers = year_followers;


    }
  }
  module.exports = {
    Stats : Stats,
  };
  