var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
    this.videoList = new VideoListView( {collection: this.videos} );
    // this.videoPlayer = new VideoPlayerView( {model: this.videos[0]} );
    this.videoList.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

