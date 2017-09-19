const Sequelize = require('sequelize')
const sequelize = new Sequelize('testesqlize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
  },

  define: {
      timestamps: false // true by default
  }

})

const User = sequelize.define('user', { // timestamps is false by default
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



const Post = sequelize.define('post', {}, {
    timestamps: true // timestamps is true for this now
})
