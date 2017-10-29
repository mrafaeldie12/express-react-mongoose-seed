var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development',
  MONBODB_URI = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-react-mongoose-seed'
    },
    port: process.env.PORT || 3001,
    db: MONBODB_URI || 'mongodb://localhost/express-react-mongoose-seed-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-react-mongoose-seed'
    },
    port: process.env.PORT || 3001,
    db: MONBODB_URI || 'mongodb://localhost/express-react-mongoose-seed-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-react-mongoose-seed'
    },
    port: process.env.PORT || 3001,
    db: MONBODB_URI || 'mongodb://localhost/express-react-mongoose-seed-production'
  }
};

module.exports = config[env];
