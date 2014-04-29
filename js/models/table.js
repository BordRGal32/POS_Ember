Pos.Table = DS.Model.extend({
  number: DS.attr('number'),
  isOccupied: DS.attr('boolean'),
  occupancy: DS.attr('number'),
  hasDiv: DS.attr('boolean')
});

Pos.Table.FIXTURES = [
{
  id: 1,
  number: 1,
  isOccupied: false,
  occupancy: 2,
  hasDiv: true
},
{
  id: 2,
  number: 2,
  isOccupied: false,
  occupancy: 3,
  hasDiv: true
},{
  id: 3,
  number: 3,
  isOccupied: false,
  occupancy: 5,
  hasDiv: true
},{
  id: 4,
  number: 4,
  isOccupied: true,
  occupancy: 4,
  hasDiv: true
},{
  id: 5,
  number: 5,
  isOccupied: false,
  occupancy: 2,
  hasDiv: true
}

];
