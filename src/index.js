var uniqueRandomArray = require('unique-random-array')
var charactersNames = require('./random-names.json');

module.exports = {
	all: charactersNames,
	random: uniqueRandomArray(charactersNames)
}