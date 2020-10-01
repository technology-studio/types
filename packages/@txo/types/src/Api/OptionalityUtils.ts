/*
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2020-10-01T15:10:31+02:00
 * @Copyright: Technology Studio
 */

export const is = <TYPE>(value: TYPE, onGetError?: () => Error): TYPE => {
  if (value) {
    return value
  }
  if (onGetError) {
    throw onGetError()
  }
  throw new Error('undefined value, should be present')
}
