import { TradierAccountType, TradierClient, TradierClientOptions, TradierHistoryInterval } from '../lib/index';

const options: TradierClientOptions = {
  accessToken: 'pR1lZssQGpFZuSKPocUIK6G6ryx9', // Token receieved after creating tradier account
  accountType: TradierAccountType.SANDBOX // Depends on type of account created.
}

const tradier: TradierClient = new TradierClient(options);
const e = await tradier.market.getOptionExpirations('ba');
console.log(e);
// .then(ok => console.log(ok))
// tradier.market.getHistoricalPricing('spy', TradierHistoryInterval.DAILY).then(qs => {
//     console.log('quote 1', JSON.stringify(qs, null, 2))
// })
