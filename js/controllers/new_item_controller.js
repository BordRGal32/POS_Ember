Pos.NewItemController = Ember.ObjectController.extend({
  actions: {
    createItem: function() {

      var newName = this.get('newName');
      var newPrice = this.get('newPrice');
      var newItem = this.store.createRecord('item', {
        name: newName,
        price: newPrice,
        hasDiv: true
      });
      this.set('newName', '');
      this.set('newPrice', '');
      this.transitionToRoute('/');

    }
  }
})
