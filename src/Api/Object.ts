/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-08-04T09:08:66+02:00
 * @Copyright: Technology Studio
**/

export const isObject = (obj: unknown): obj is Record<string | number | symbol, unknown> => (
  obj != null && typeof obj === 'object'
)

export const isEmptyObject = <OBJECT>(obj?: OBJECT | null): obj is OBJECT => !!(
  obj != null && Object.keys(obj).length === 0
)
