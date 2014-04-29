Pos.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      var newNumber = this.get("length");
      var newTable = this.store.createRecord('table', {
        number: newNumber + 1,
        isOccupied: false
      });

      // newTable.save();

    }
  }
})
