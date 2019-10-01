
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          firstName: 'Marko',
          lastName: "Pecic",
          email: "mpecic@me.com",
          password: "asdf",
          address: "1235 main st, test, test, 12345",
          admin: true
        }
      ]);
    });
};
