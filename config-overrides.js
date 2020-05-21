/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  require("fs").writeFileSync(
    "./webpack.runtime.json",
    JSON.stringify(
      config,
      (k, v) => {
        if (k === "test") return String(v)
        return v
      },
      2,
    ),
  )

  return config
}
