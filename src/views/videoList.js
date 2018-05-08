var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  el: '.list',

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for ( var i = 0; i < this.collection.models.length; i++) {
      console.log(this.collection.models[i]);
      var videoListEntry = new VideoListEntryView({model: this.collection.models[i]});
    }
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
