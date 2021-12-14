const authResolver = require('./authResolver');
const estudiantesResolver = require('./estudiantesResolver');
const registrosResolver = require('./registrosResolver');
const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, estudiantesResolver, registrosResolver);
module.exports = resolvers;