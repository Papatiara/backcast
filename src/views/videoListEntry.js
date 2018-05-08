var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.$('.video-list-entry-title').click(this.model.select.bind(this.model));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    $('.video-list').append(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
