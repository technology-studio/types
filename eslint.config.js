module.exports = (async function config() {
  const txoPackageConfigList = await import('eslint-config-txo-package-typescript')
  return [
    ...txoPackageConfigList.configList,
    {
      files: ['example/**/*.ts'],
      languageOptions: {
        parserOptions: {
          project: './example/tsconfig.json'
        },
      },
    },
  ]
})()
