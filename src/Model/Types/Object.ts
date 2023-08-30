/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-08-14T09:08:75+02:00
 * @Copyright: Technology Studio
**/

import type { OnlyString } from './String'

export type IsPlainObject<T> = T extends Record<string, unknown>
  ? T extends string | number | boolean | unknown[] | ((...args: unknown[]) => unknown)
    ? never
    : T
  : never

type NoExpand<T> = T extends unknown ? T : never

// this type assumes the passed object is entirely optional
// eslint-disable-next-line @typescript-eslint/ban-types
export type AtLeastOne<OBJ extends object, KEYS extends string = OnlyString<keyof OBJ>> = NoExpand<
OBJ extends unknown
  ? | (KEYS extends keyof OBJ ? { [P in KEYS]: OBJ[P] } & OBJ : OBJ)
    | { [P in keyof OBJ as P extends KEYS ? KEYS : never]-?: OBJ[P] } & OBJ
  : never>
