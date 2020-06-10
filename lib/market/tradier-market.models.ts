
export enum TradierHistoryInterval {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}

export enum TradierTimeSalesInterval {
  TICK = 'tick',
  ONE_MIN = '1min',
  FIVE_MIN = '5min',
  FIFTEEN_MIN = '15min',
}

export enum TradierSessionFilter {
  ALL = 'all',
  OPEN = 'open',
}

export interface Expirations {
  date: string[];
}

export interface Options {
  option: Option[];
}

export interface Option {
  symbol: string;
  description: string;
  exch: string;
  type: string;
  last?: number;
  change?: number;
  volume: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  bid: number;
  ask: number;
  underlying: string;
  strike: number;
  greeks: Greeks;
  change_percentage?: number;
  average_volume: number;
  last_volume: number;
  trade_date: number;
  prevclose?: number;
  week_52_high: number;
  week_52_low: number;
  bidsize: number;
  bidexch: string;
  bid_date: number;
  asksize: number;
  askexch: string;
  ask_date: number;
  open_interest: number;
  contract_size: number;
  expiration_date: string;
  expiration_type: string;
  option_type: string;
  root_symbol: string;
}

export interface Greeks {
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
  phi: number;
  bid_iv: number;
  mid_iv: number;
  ask_iv: number;
  smv_vol: number;
  updated_at: string;
}

export interface History {
  day: Day[];
}

export interface Day {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Quotes {
  quote: Quote;
}

export interface Quote {
  symbol: string;
  description: string;
  exch: string;
  type: string;
  last: number;
  change: number;
  volume: number;
  open: number;
  high: number;
  low: number;
  close: number;
  bid: number;
  ask: number;
  underlying: string;
  strike: number;
  change_percentage: number;
  average_volume: number;
  last_volume: number;
  trade_date: number;
  prevclose: number;
  week_52_high: number;
  week_52_low: number;
  bidsize: number;
  bidexch: string;
  bid_date: number;
  asksize: number;
  askexch: string;
  ask_date: number;
  open_interest: number;
  contract_size: number;
  expiration_date: string;
  expiration_type: string;
  option_type: string;
  root_symbol: string;
}

export interface Strikes {
  strike: number[];
}
