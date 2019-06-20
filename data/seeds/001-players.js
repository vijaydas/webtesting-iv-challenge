
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {name: 'Jack Johnson', sport: 'Boxing', decade: "1910"},
        {name: 'Bruce Jenner', sport: 'Decathalon', decade: "1980"},
        {name: 'Jim Thorpe', sport: 'Football', decade: "1930"},
      ]);
    });
};
