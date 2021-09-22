import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'GreenHouseswap',
  description:
    'The most popular AMM on BSC by user count! Earn CHY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://greenhouseswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('GreenHouseswap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('GreenHouseswap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('GreenHouseswap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('GreenHouseswap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('GreenHouseswap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('GreenHouseswap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('GreenHouseswap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('GreenHouseswap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('GreenHouseswap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('GreenHouseswap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('GreenHouseswap')}`,
      }
    default:
      return null
  }
}
