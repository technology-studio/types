/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2021-05-06T16:05:01+02:00
 * @Copyright: Technology Studio
**/

export type Typify<T> = { [ K in keyof T ]: T[ K ] }
