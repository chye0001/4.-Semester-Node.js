const parties = require("./parties.json") // this is not a libary since we have the ./ in front if parties.json
                                          // a libary does not have a prefix, nor an extention like .json.
const valueObject = {
    value: 1
}

module.exports = {
    parties, //newer js syntax, "parties" is both the key and value in one.
    valueObject
}