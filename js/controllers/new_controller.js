Pos.NewController = Ember.ObjectController.extend({
  actions: {
    createTable: function() {
      var tables = this.store.find('table');
      var newNumber = this.get('newNumber');
      var newOccupancy = this.get('newOccupancy');
      var newTable = this.store.createRecord('table', {
        number: newNumber,
        isOccupied: false,
        occupancy: newOccupancy,
        hasDiv: true
      });
      this.set('newNumber', '');
      this.set('newOccupancy', '');
      this.transitionToRoute('/', tables);

    }
  }
})
