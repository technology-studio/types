/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-08-14T09:08:65+02:00
 * @Copyright: Technology Studio
**/

export type OnlyString<TYPE> = TYPE extends string ? TYPE : never
