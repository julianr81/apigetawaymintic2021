// call all the typeDefs here
const authTypes = require('./authTypeDefs')
const estudiantesTypes = require('./estudiantesTypeDefs')
const registrosTypes = require('./registrosTypeDefs')

const schemaArrays = [authTypes, estudiantesTypes, registrosTypes]
module.exports = schemaArrays