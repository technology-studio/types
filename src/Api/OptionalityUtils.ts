/*
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-10-01T15:10:31+02:00
 * @Copyright: Technology Studio
 */

export const is = <TYPE>(value: TYPE | undefined | null, onGetError?: () => Error): TYPE => {
  if (value != null) {
    return value
  }
  if (onGetError != null) {
    throw onGetError()
  }
  throw new Error('undefined or null value, should be present')
}
