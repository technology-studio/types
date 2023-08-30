/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-08-30T08:08:71+02:00
 * @Copyright: Technology Studio
 */

export type Exact<T, U, Y='exact-match', N='differs'> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? Y : N
