import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Cultivate'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Grinder'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Juicy'),
    icon: 'PredictionsIcon',
    href: '/juicy',
  },
  {
    label: t('IGO (soon)'),
    icon: 'GroupsIcon',
    href: '/igo',
  },
  {
    label: t('Lottery (soon)'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Casino (soon)'),
    icon: 'NftIcon',
    href: '/casino',
  },
  {
    label: t('NFT Store(soon)'),
    icon: 'TeamBattleIcon',
    href: '/nft',
  },
  
  {
    label: t('Merch (soon)'),
    icon: 'InfoIcon',
    href: '/merch',
  },
  {
    label: t('Bets (soon)'),
    icon: 'IfoIcon',
    href: '/bets',
  },
  
]

export default config
