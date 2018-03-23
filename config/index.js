const mode = process.env.NODE_ENV || "development"
module.exports = require(`./${mode}.config`)
