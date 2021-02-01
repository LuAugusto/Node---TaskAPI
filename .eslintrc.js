module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    plugins:['prettier'],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType":'moduel'
    },
    "rules": {
        "prettier/prettier":"error",
        "class-methods-use-this":"off",
        "no-param-reassign":"off",
        "camelcase":"off",
        "no-underscore-dangle":"off",
        "no-unused-vars":["error", {"argsIgnorePattern":"next"}]
    }
};
