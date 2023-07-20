/*
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2020-10-01T15:10:31+02:00
 * @Copyright: Technology Studio
 */

export const castString = <VALUE,>(value: VALUE): VALUE extends null ? null | string : VALUE extends undefined ? undefined | string : string => {
  if (value != null && typeof value !== 'string') {
    throw Error(`type of value is not string, value type: ${typeof value}`)
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
  return value as any
}
