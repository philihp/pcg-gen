// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { srand } from '..'

describe('srand', () => {
  const randomizer = srand(42n)

  it('returns an iterator', () => {
    expect.assertions(1)
    expect(typeof randomizer.next).toBe('function')
  })

  it('returns an iterable', () => {
    expect.assertions(1)
    expect(typeof randomizer[Symbol.iterator]).toBe('function')
  })

  it('returns a generator', () => {
    expect.assertions(1)
    expect(randomizer[Symbol.iterator]()).toBe(randomizer)
  })

  it('can be used like an iterator', () => {
    expect.assertions(2)
    const randomizer = srand(42n)
    const results = []
    for (const num of randomizer) {
      // infinite loop, unless you do this
      if (results.length >= 10) break
      results.push(num)
    }
    const { done } = randomizer.next()
    expect(results).toStrictEqual([
      11541586741780280317n,
      1292176121501498n,
      26704090232905n,
      17854417029176992176n,
      613727075605702022n,
      51332072025775n,
      8860481020046524554n,
      3318766098841509934n,
      30343170716585203n,
      50682878230040n,
    ])
    expect(done).toBeTruthy()
  })

  it('behaves like an infinite generator', () => {
    expect.assertions(2)
    const { value, done } = randomizer.next()
    expect(value).toBe(11541586741780280317n)
    expect(done).toBeFalsy()
  })
})
