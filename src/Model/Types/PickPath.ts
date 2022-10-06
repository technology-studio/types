/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-05-12T20:05:46+02:00
 * @Copyright: Technology Studio
**/

export type PickPath<T, PATH extends string> = (
  T extends undefined
    ? never
    : PATH extends `${infer FIRST}.${infer REST}`
      ? FIRST extends keyof T
        ? PickPath<T[FIRST], REST>
        : never
      : PATH extends keyof T
        ? T[PATH]
        : never

)
