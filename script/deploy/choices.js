const shell = require('shelljs');

const companyPath = shell.find('~/company/ziliao/put.js')[0];
const company = companyPath ?  require(companyPath) : [];

module.exports = [
  ... company,
];
