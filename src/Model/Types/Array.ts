/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-08-30T08:08:19+02:00
 * @Copyright: Technology Studio
 */

export type IsArray<T> = T extends (infer U)[] ? U[] : never
