/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-08-15T18:08:23+02:00
 * @Copyright: Technology Studio
**/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (value: any): value is (...args: any[]) => any => (
  typeof value === 'function'
)
