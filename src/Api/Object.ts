/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-08-04T09:08:66+02:00
 * @Copyright: Technology Studio
**/

import type {
  AtLeastOneNilable,
} from '../Model/Types/Object'

export const isObject = (obj: unknown): obj is Record<string | number | symbol, unknown> => (
  obj != null && typeof obj === 'object'
)

export const isEmptyObject = <OBJECT>(obj?: OBJECT | null): obj is OBJECT => !!(
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- check if object has no keys
  obj != null && Object.keys(obj).length === 0
)

// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- this function is a type caster
export const atLeastOne = <TYPE extends object | null | undefined>(value: TYPE): AtLeastOneNilable<TYPE> => value as AtLeastOneNilable<TYPE>
