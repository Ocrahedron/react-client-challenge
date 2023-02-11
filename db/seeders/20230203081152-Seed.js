/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todolists', [{
      name: 'Finish Elbrus',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Waiting a summer',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Take a breakfest',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Walking with dog',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Buy a Mac',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todolist', null, {});
  },
};
