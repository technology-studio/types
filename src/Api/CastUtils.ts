/*
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2020-10-01T15:10:31+02:00
 * @Copyright: Technology Studio
 */

export const castString = (value: unknown): string => {
  if (value != null && typeof value !== 'string') {
    throw new Error(`type of value is not string, value type: ${typeof value}`)
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return value!
}
