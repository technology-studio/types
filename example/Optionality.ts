/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-10-03T15:10:50+02:00
 * @Copyright: Technology Studio
**/
/* eslint-disable @typescript-eslint/no-explicit-any */
import { is } from '@txo/types'

export const nullable: string | null = (null as any)
export const optional: string | undefined = (undefined as any)

export const nonNullable: string = is(nullable)
export const nonOptional: string = is(optional)
