module.exports = {
  'src/**/*.{js,jsx,ts,tsx,json,css,scss,less,md,vue}': (files) => {
    return `prettier --write ${files.join(' ')}`
  }
}