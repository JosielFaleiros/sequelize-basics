const Sequelize = require('sequelize')

const sequelize = new Sequelize('testesqlize', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
/*
Executing (default): DROP TABLE IF EXISTS `user`;
Executing (default): CREATE TABLE IF NOT EXISTS `user` (`id` INTEGER NOT NULL auto_increment , `first_name` VARCHAR(255), `lastName` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `user`

*/

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})

/*
 the .sync here syncronize the ddl.

Executing (default): INSERT INTO `user` (`id`,`first_name`,`lastName`,`createdAt`,`updatedAt`)
VALUES (DEFAULT,'John','Hancock','2017-09-19 02:58:17','2017-09-19 02:58:17');
*/
User.sync({force: false}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
})
