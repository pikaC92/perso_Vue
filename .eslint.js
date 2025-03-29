// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "prefer-arrow"
    ],
    "rules": {
        "prefer-arrow-callback": [
            "error",
            {"allowNamedFunctions": true}
        ],
        "no-empty-function": ["error"]
    }
}