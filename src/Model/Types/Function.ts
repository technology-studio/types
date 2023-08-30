/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-08-30T08:08:54+02:00
 * @Copyright: Technology Studio
 */

export type IsFunction<T> = T extends (...args: unknown[]) => unknown ? T : never
