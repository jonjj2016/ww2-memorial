// Initializes the `donate` service on path `/donate`
const { Donate } = require('./donate.class');
const createModel = require('../../models/donate.model');
const hooks = require('./donate.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/donate', new Donate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('donate');

  service.hooks(hooks);
};
