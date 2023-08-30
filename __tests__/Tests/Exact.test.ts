/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-08-19T11:08:83+02:00
 * @Copyright: Technology Studio
**/

import { type Exact } from '../../src'

describe('Exact Utility Type', () => {
  type IsNever<T> = [T] extends [never] ? true : false

  // Test for exact primitive types
  it('should ensure exact primitive types', () => {
    type ExpectedType = number

    // Failure scenario: Mismatch of primitive types
    type FailResultPrimitive = Exact<string, ExpectedType>
    const testFailResultPrimitive: FailResultPrimitive = 'differs'
    expect(testFailResultPrimitive).toBe('differs')

    // Success scenario
    type TestSuccessPrimitive = Exact<number, ExpectedType>
    const isNeverSuccessPrimitive: IsNever<TestSuccessPrimitive> = false
    expect(isNeverSuccessPrimitive).toBe(false)
  })

  // Test for object exactness
  it('should ensure exact object structure', () => {
    type ExpectedType = { a: number, b: string }

    // Failure scenario: Extra property
    type FailResultExtraProp = Exact<{ a: number, b: string, c: boolean }, ExpectedType>
    const testFailResultExtraProp: FailResultExtraProp = 'differs'
    expect(testFailResultExtraProp).toBe('differs')

    // Failure scenario: Missing property
    type FailResultMissingProp = Exact<{ a: number }, ExpectedType>
    const testFailResultMissingProp: FailResultMissingProp = 'differs'
    expect(testFailResultMissingProp).toBe('differs')

    // Failure scenario: Different property type
    type FailResultDifferentPropType = Exact<{ a: string, b: string }, ExpectedType>
    const testFailResultDifferentPropType: FailResultDifferentPropType = 'differs'
    expect(testFailResultDifferentPropType).toBe('differs')

    // Success scenario
    type TestSuccessObject = Exact<{ a: number, b: string }, ExpectedType>
    const isNeverSuccessObject: IsNever<TestSuccessObject> = false
    expect(isNeverSuccessObject).toBe(false)
  })

  // Test for arrays
  it('should ensure exact array structure', () => {
    type ExpectedType = number[]

    // Failure scenario: Mismatch of array element types
    type FailResultArray = Exact<string[], ExpectedType>
    const testFailResultArray: FailResultArray = 'differs'
    expect(testFailResultArray).toBe('differs')

    // Failure scenario: Mixed array
    type FailResultMixedArray = Exact<(string | number)[], ExpectedType>
    const testFailResultMixedArray: FailResultMixedArray = 'differs'
    expect(testFailResultMixedArray).toBe('differs')

    // Success scenario
    type TestSuccessArray = Exact<number[], ExpectedType>
    const isNeverSuccessArray: IsNever<TestSuccessArray> = false
    expect(isNeverSuccessArray).toBe(false)
  })

  // Test for deep nested structures
  it('should ensure exact deep nested structure', () => {
    type ExpectedType = { a: { b: { c: number[] } } }

    // Failure scenario: Mismatch in deep nested structure
    type FailResultDeep = Exact<{ a: { b: { c: string[] } } }, ExpectedType>
    const testFailResultDeep: FailResultDeep = 'differs'
    expect(testFailResultDeep).toBe('differs')

    // Success scenario
    type TestSuccessDeep = Exact<{ a: { b: { c: number[] } } }, ExpectedType>
    const isNeverSuccessDeep: IsNever<TestSuccessDeep> = false
    expect(isNeverSuccessDeep).toBe(false)
  })

  // Test for union types compared to a single type
  it('should ensure that union types do not match single types', () => {
    type UnionType = number | string | boolean

    // Failure scenario: Union type vs single type
    type FailResult = Exact<UnionType, number>
    const testFailResult: FailResult = 'differs'
    expect(testFailResult).toBe('differs')

    // Success scenario: Union type matches exactly with another union type
    type TestSuccess = Exact<UnionType, number | string | boolean>
    const isSuccess: IsNever<TestSuccess> = false
    expect(isSuccess).toBe(false)
  })

  it('should distinguish between undefined and null', () => {
    type TestFailResultUndefined = Exact<undefined, null>
    const testFailResultUndefined: TestFailResultUndefined = 'differs'
    expect(testFailResultUndefined).toBe('differs')

    type TestFailResultNull = Exact<null, undefined>
    const testFailResultNull: TestFailResultNull = 'differs'
    expect(testFailResultNull).toBe('differs')
  })

  it('should match unions with undefined and null correctly', () => {
    // Success scenarios
    type TestUnionUndefined = Exact<number | undefined, number | undefined>
    const isMatchUnionUndefined: IsNever<TestUnionUndefined> = false
    expect(isMatchUnionUndefined).toBe(false)

    type TestUnionNull = Exact<number | null, number | null>
    const isMatchUnionNull: IsNever<TestUnionNull> = false
    expect(isMatchUnionNull).toBe(false)

    type TestUnionBoth = Exact<number | null | undefined, number | null | undefined>
    const isMatchUnionBoth: IsNever<TestUnionBoth> = false
    expect(isMatchUnionBoth).toBe(false)
  })

  it('should not match unions with extraneous types', () => {
    type TestFailResultExtraUndefined = Exact<number | undefined, number | null>
    const testFailResultExtraUndefined: TestFailResultExtraUndefined = 'differs'
    expect(testFailResultExtraUndefined).toBe('differs')

    type TestFailResultExtraNull = Exact<number | null, number | undefined>
    const testFailResultExtraNull: TestFailResultExtraNull = 'differs'
    expect(testFailResultExtraNull).toBe('differs')
  })

  it('should handle combinations with arrays', () => {
    type TestFailResultArrayUndefined = Exact<(number[] | undefined), (number[] | null)>
    const testFailResultArrayUndefined: TestFailResultArrayUndefined = 'differs'
    expect(testFailResultArrayUndefined).toBe('differs')

    type TestFailResultArrayNull = Exact<(number[] | null), (number[] | undefined)>
    const testFailResultArrayNull: TestFailResultArrayNull = 'differs'
    expect(testFailResultArrayNull).toBe('differs')
  })

  it('should handle combinations with objects', () => {
    type TestFailResultObjectUndefined = Exact<{ a: number } | undefined, { a: number } | null>
    const testFailResultObjectUndefined: TestFailResultObjectUndefined = 'differs'
    expect(testFailResultObjectUndefined).toBe('differs')

    type TestFailResultObjectNull = Exact<{ a: number } | null, { a: number } | undefined>
    const testFailResultObjectNull: TestFailResultObjectNull = 'differs'
    expect(testFailResultObjectNull).toBe('differs')
  })

  it('should handle deep mixed object-array structures', () => {
    type Structure = { a: { b: number[] } } | null | undefined

    type TestFailResultDeepMixed1 = Exact<Structure, { a: { b: string[] } } | null | undefined>
    const testFailResultDeepMixed1: TestFailResultDeepMixed1 = 'differs'
    expect(testFailResultDeepMixed1).toBe('differs')

    type TestDeepMixed2 = Exact<Structure, { a: { b: number[] } } | null | undefined>
    const isMatchDeepMixed2: IsNever<TestDeepMixed2> = false
    expect(isMatchDeepMixed2).toBe(false)
  })

  it('should distinguish between array of objects with different properties', () => {
    type TestFailResult1 = Exact<{ a: number }[], { b: number }[]>
    const testFailResult1: TestFailResult1 = 'differs'
    expect(testFailResult1).toBe('differs')

    type TestFailResult2 = Exact<{ a: number, b: string }[], { a: number }[]>
    const testFailResult2: TestFailResult2 = 'differs'
    expect(testFailResult2).toBe('differs')
  })

  it('should handle nested objects inside arrays', () => {
    type TestFailResult1 = Exact<{ a: { b: number } }[], { a: { b: string } }[]>
    const testFailResult1: TestFailResult1 = 'differs'
    expect(testFailResult1).toBe('differs')

    type TestFailResult2 = Exact<{ a: { b: number, c: string } }[], { a: { b: number } }[]>
    const testFailResult2: TestFailResult2 = 'differs'
    expect(testFailResult2).toBe('differs')
  })

  it('should differentiate between array of objects with null and undefined variations', () => {
    type TestFailResult1 = Exact<({ a: number } | null)[], ({ a: number } | undefined)[]>
    const testFailResult1: TestFailResult1 = 'differs'
    expect(testFailResult1).toBe('differs')

    type TestFailResult2 = Exact<({ a: number } | undefined)[], ({ a: number } | null)[]>
    const testFailResult2: TestFailResult2 = 'differs'
    expect(testFailResult2).toBe('differs')

    type TestFailResult3 = Exact<({ a: number } | null | undefined)[], { a: number }[]>
    const testFailResult3: TestFailResult3 = 'differs'
    expect(testFailResult3).toBe('differs')
  })

  it('should handle complex nested structures with arrays, objects, null, and undefined', () => {
    type Complex = ({ a: { b: number[] } } | null | undefined)[]

    type TestFailResult1 = Exact<Complex, ({ a: { b: string[] } } | null | undefined)[]>
    const testFailResult1: TestFailResult1 = 'differs'
    expect(testFailResult1).toBe('differs')

    type TestFailResult2 = Exact<Complex, ({ a: { b: number[] } } | undefined)[]>
    const testFailResult2: TestFailResult2 = 'differs'
    expect(testFailResult2).toBe('differs')

    type TestFailResult3 = Exact<Complex, ({ a: { b: number[] } } | null)[]>
    const testFailResult3: TestFailResult3 = 'differs'
    expect(testFailResult3).toBe('differs')

    type Test4 = Exact<Complex, ({ a: { b: number[] } } | null | undefined)[]>
    const isMatch4: IsNever<Test4> = false
    expect(isMatch4).toBe(false)
  })
})
