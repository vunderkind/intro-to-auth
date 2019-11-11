
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('login').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('login').insert([
        {username: 'Bola', password: 'Bola'},
        {username: 'Osarumen', password: 'Osarumen'},
        {username: 'Mustafa', password: 'Mustafa'}
      ]);
    });
};
