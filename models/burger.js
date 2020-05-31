const orm = require("../config/orm.js");

const burger = {
    sellectAll: function () {
        return orm.sellectAll("burgers")
    },
    insertOne: function (cols, vals) {
        return orm.insertOne("burgers", cols, vals);
    },
    updateOne: (objColVals, condition) => {
        return orm.updateOne("burgers", objColVals, condition);
    },

    delete: (condition) => {
        return orm.delete("burgers", condition);
    }
};

module.exports = burger;