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
1º RIGHT WAY AND 2º WRONG:

*/
User.findOne().then(function (user) {
    console.log(user.get('firstName'))
})

/*
WRONG WAY: !!
don't do this, because this is returned as a promise
*/
let user = User.findOne()

console.log(user.get('firstName'))
