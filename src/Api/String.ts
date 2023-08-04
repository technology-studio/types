/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2023-03-07T09:03:71+01:00
 * @Copyright: Technology Studio
**/

export const isNotEmptyString = (value: string | null | undefined): value is string => value != null && value !== ''
