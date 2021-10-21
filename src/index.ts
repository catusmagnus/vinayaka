// Packages:
import Binance, { Binance as IBinance, OrderSide_LT, OrderType_LT, SymbolLotSizeFilter } from 'binance-api-node'
import dotenv from 'dotenv'
dotenv.config()
import getCurrentLine from 'get-current-line'
import BigNumber from 'bignumber.js'
BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_DOWN })


// Typescript:
import { IResult } from './ts/interfaces'


// Constants:
import { TARGET_ASSETS } from './constants'
import { RSX_CONSTANTS } from './constants/RSX'


// Functions:
import RSX from './indicators/RSX'

const getAssetsPrecision = async (binanceClient: IBinance, symbol: string) => {
  try {
    const exchangeInfo = await binanceClient.exchangeInfo()
    return parseFloat((exchangeInfo.symbols
      .find(o => o.symbol === symbol)?.filters
      .find(o => o.filterType === 'LOT_SIZE') as SymbolLotSizeFilter)
      ?.minQty).toString().split('.')[1].length ?? 5
  } catch (e) {
    console.error(`❌\tCould not fetch assets precision.\n❌\tAn error occured at line ${ getCurrentLine().line }: ${ e }`)
    return 5
  }
}

const getAccountBalance = async (binanceClient: IBinance, baseSymbol: string, quoteSymbol: string) => {
  try {
    const accountInfo = await binanceClient.accountInfo({ useServerTime: true })
    const base = accountInfo.balances.find(o => o.asset === baseSymbol)?.free
    const quote = accountInfo.balances.find(o => o.asset === quoteSymbol)?.free
    if (base === undefined || quote === undefined) {
      return { base: '0', quote: '0' }
    } else {
      return {
        base,
        quote
      }
    }
  } catch(e) {
    console.error(`❌\tCould not fetch account balance.\n❌\tAn error occured at line ${ getCurrentLine().line }: ${ e }`)
    return { base: '0', quote: '0' }
  }
}

const placeOrder = async (binanceClient: IBinance, side: OrderSide_LT, symbol: string, type: OrderType_LT, quantity: string, price?: number): Promise<IResult> => {
  try {
    const newOrder = await binanceClient.futuresOrder({ side, symbol, type, quantity, price })
    return { result: 0, payload: newOrder }
  } catch(e) {
    return { result: 1, payload: e }
  }
}

const handleCandle = () => {}

const vinayaka = async () => {
  const binanceClient = Binance({ apiKey: process.env.API_KEY, apiSecret: process.env.API_SECRET })
  const closeWSHandlers = TARGET_ASSETS.map(SYMBOL => ({ _id: SYMBOL, close: binanceClient.ws.candles(SYMBOL, '5m', handleCandle) }))
}

