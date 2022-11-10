'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const transaction = await queryInterface.sequelize.transaction();

    try{
      await queryInterface.addColumn('pessoas', 'rg', {
        type: Sequelize.STRING,
        allowNull: true,
      });

      await transaction.commit()
    } catch(error){

      await transaction.rollback();
      throw error
    }    
  },

  async down (queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try{
      await queryInterface.removeColumn('pessoas', 'rg')
      await transaction.commit()
    } catch(err){

      await transaction.rollback();
      throw err
    }   
   
  }
};
