// Imports:
import BigNumber from 'bignumber.js'


// Functions:
const RSX = async ({ OHLC, period } : { OHLC: { opens: number[], highs: number[], lows: number[], closes: number[] }, period: number }): Promise<number[]> => {
  const length = (!period) ? 9 : period
  const OHLC4s = OHLC.opens.map((open, index) => {
    return (new BigNumber(open).plus(new BigNumber(OHLC.highs[ index ])).plus(new BigNumber(OHLC.lows[ index ])).plus(new BigNumber(OHLC.closes[ index ]))).div(4)
  })
  const f8 = OHLC4s.map(OHLC4 => new BigNumber(OHLC4).times(100))
  const f10 = f8.map((_v, i) => f8[i - 1] ?? 0)
  const v8 = f10.map((vf10, i) => f8[i].minus(vf10))

  const f18 = new BigNumber(3 / (length + 2)), f20 = f18.negated().plus(1)
  let lastf28 = new BigNumber(0)
  const f28 = v8.map(vv8 => lastf28 = (f20.times(lastf28)).plus(f18.times(vv8)))

  let lastf30 = new BigNumber(0)
  const f30 = f28.map(vf28 => lastf30 = f18.times(vf28).plus(f20.times(lastf30)))
  const vC = f28.map((vf28, index) => vf28.times(1.5).minus(f30[ index ].times(0.5)))

  let lastf38 = new BigNumber(0)
  const f38 = vC.map(vvC => lastf38 = f20.times(lastf38).plus(f18.times(vvC)))

  let lastf40 = new BigNumber(0)
  const f40 = f38.map(vf38 => lastf40 = f18.times(vf38).plus(f20.times(lastf40)))
  const v10 = f38.map((vf38, index) => vf38.times(1.5).minus(f40[ index ].times(0.5)))

  let lastf48 = new BigNumber(0)
  const f48 = v10.map(vv10 => lastf48 = f20.times(lastf48).plus(f18.times(vv10)))

  let lastf50 = new BigNumber(0)
  const f50 = f48.map(vf48 => lastf50 = f18.times(vf48).plus(f20.times(lastf50)))
  const v14 = f48.map((vf48, index) => vf48.times(1.5).minus(f50[ index ].times(0.5)))

  let lastf58 = new BigNumber(0)
  const f58 = v8.map(vv8 => lastf58 = f20.times(lastf58).plus(f18.times(vv8.abs())))

  let lastf60 = new BigNumber(0)
  const f60 = f58.map(vf58 => lastf60 = f18.times(vf58).plus(f20.times(lastf60)))
  const v18 = f58.map((vf58, index) => vf58.times(1.5).minus(f60[ index ].times(0.5)))

  let lastf68 = new BigNumber(0)
  const f68 = v18.map(vv18 => lastf68 = f20.times(lastf68).plus(f18.times(vv18)))

  let lastf70 = new BigNumber(0)
  const f70 = f68.map(vf68 => lastf70 = f18.times(vf68).plus(f20.times(lastf70)))
  const v1C = f68.map((vf68, index) => vf68.times(1.5).minus(f70[ index ].times(0.5)))

  let lastf78 = new BigNumber(0)
  const f78 = v1C.map(vv1C => lastf78 = f20.times(lastf78).plus(f18.times(vv1C)))

  let lastf80 = new BigNumber(0)
  const f80 = f78.map(vf78 => lastf80 = f18.times(vf78).plus(f20.times(lastf80)))
  const v20 = f78.map((vf78, index) => vf78.times(1.5).minus(f80[ index ].times(0.5)))

  const v4_ = v20.map((vv20, index) => vv20.isGreaterThan(0) ? ((v14[ index ].div(vv20)).plus(1)).times(50) : new BigNumber(50))

  const RSXs = v4_.map(vv4_ => vv4_.isGreaterThan(100) ? new BigNumber(100) : vv4_.isLessThan(0) ? new BigNumber(0) : vv4_)

  return RSXs.map(RSX => +RSX)
}


// Exports:
export default RSX