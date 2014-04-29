Pos.Router.map(function(){
  this.resource('tables', { path: '/' }, function() {
    this.resource('new');
    this.resource('new_item')
  });
});

Pos.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Pos.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('item').set('model', this.store.find('item'))
  }
});

Pos.NewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('table')
  }
});

Pos.NewItemRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('item')
  }
});


