const { override, useBabelRc } = require('customize-cra')

module.exports = override(
    // useBabelRc
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
)
