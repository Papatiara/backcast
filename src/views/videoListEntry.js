var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  initialize: function() {
    this.render();
    this.$('.video-list-entry-title').on('click', this.model.select());
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
