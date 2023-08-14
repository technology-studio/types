/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-08-04T09:08:66+02:00
 * @Copyright: Technology Studio
**/

import type { AtLeastOne } from '../Model/Types/Object'

export const isObject = (obj: unknown): obj is Record<string | number | symbol, unknown> => (
  obj != null && typeof obj === 'object'
)

export const isEmptyObject = <OBJECT>(obj?: OBJECT | null): obj is OBJECT => !!(
  obj != null && Object.keys(obj).length === 0
)

// eslint-disable-next-line @typescript-eslint/ban-types
export const atLeastOne = <TYPE extends object>(value: TYPE | undefined): AtLeastOne<TYPE> => value as AtLeastOne<TYPE>
