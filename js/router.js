Pos.Router.map(function(){
  this.resource('tables', { path: '/' });
  this.resource('new_table', {path: '/tables/new'});
});

Pos.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Pos.NewTableRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('table')
  }
});
