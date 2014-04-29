Pos.Table = DS.Model.extend({
  number: DS.attr('integer'),
  isOccupied: DS.attr('boolean'),
  occupancy: DS.attr('integer')
});

Pos.Table.FIXTURES = [
{
  id: 1,
  number: 1,
  isOccupied: false,
  occupancy: 2
},
{
  id: 2,
  number: 2,
  isOccupied: false,
  occupancy: 3
},{
  id: 3,
  number: 3,
  isOccupied: false,
  occupancy: 5
},{
  id: 4,
  number: 4,
  isOccupied: true,
  occupancy: 4
},{
  id: 5,
  number: 5,
  isOccupied: false,
  occupancy: 2
}

];
