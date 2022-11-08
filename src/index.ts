// PCG-XSH-RR

const mask = 0xffffffffffffffffn
const increment = 1442695040888963407n
const multiplier = 63641362238467932305n

const rotr32 = (x: bigint, r: bigint) => (x >> r) | (x << (-r & 31n))

export function* srand(seed: bigint) {
  let state = seed + increment

  while (true) {
    let x = state
    const count = x >> 59n
    state = (x * multiplier + increment) & mask
    x ^= x >> 18n
    yield rotr32(x >> 27n, count)
  }
}
