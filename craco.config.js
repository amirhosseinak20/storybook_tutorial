const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
    eslint: {
        mode: ESLINT_MODES.file
    },
    plugins: [
        {
            plugin: require("craco-less"),
            options: {
                noIeCompat: true
            }
        }
    ]
};
