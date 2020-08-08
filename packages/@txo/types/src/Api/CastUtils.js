/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2019-05-24T13:05:73+02:00
 * @Copyright: Technology Studio
 * @flow
**/

export const castString = (value: any): string => {
  if (value && typeof value !== 'string') {
    throw new Error(`type of value is not string, value type: ${typeof value}`)
  }
  return value
}
