Pos.Item = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  hasDiv: DS.attr('boolean')

});

Pos.Item.FIXTURES = [
  {
    id: 1,
    name: "French Fries",
    price: 6,
    hasDiv: true
  }
];
