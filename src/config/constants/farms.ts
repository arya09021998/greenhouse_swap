import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CHY-BNB',
    lpAddresses: {
      97: '',
      56: '0x62C91836Ec825C3593a40b15fA6a24f555358956',
    },
    token: tokens.chy,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CHY-BUSD',
    lpAddresses: {
      97: '',
      56: '0xc082826E954D2626248340495c39d58ab5953AA9',
    },
    token: tokens.chy,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'CHRONIC-BNB',
    lpAddresses: {
      97: '',
      56: '0x15FE2E5c75695adF37BD7258B8999a793EdF7E88',
    },
    token: tokens.chronic,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 20,
    lpSymbol: 'CGOLD-BNB',
    lpAddresses: {
      97: '',
      56: '0x4Ad11A81A71aeEfb906c2646cC133F7Ef6801224',
    },
    token: tokens.cgold,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 21,
    lpSymbol: 'CGOLD-CAKE',
    lpAddresses: {
      97: '',
      56: '0xcD4184636133E3c654D41f54af590143d5F780b2',
    },
    token: tokens.cgold,
    quoteToken: tokens.cake,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'BNB-CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'BUSD-USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: tokens.busd,
  //   quoteToken: tokens.usdt,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'BTT-BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdcfbB12DED3FEa12D2A078Bc6324131cD14bF835',
  //   },
  //   token: tokens.btt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'USDC-USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xEc6557348085Aa57C72514D67070dC863C0a5A8c',
  //   },
  //   token: tokens.usdc,
  //   quoteToken: tokens.usdt,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'CAKE-USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.usdt,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BNB-ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  //   },
  //   token: tokens.wbnb,
  //   quoteToken: tokens.eth,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BNB-BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: tokens.wbnb,
  //   quoteToken: tokens.btcb,
  // },
  {
    pid: 11,
    lpSymbol: 'CHY',
    lpAddresses: {
      97: '',
      56: '0xc082826E954D2626248340495c39d58ab5953AA9',
    },
    isTokenOnly: true,
    token: tokens.chy,
    quoteToken: tokens.busd,
  },
  {
    pid: 12,
    lpSymbol: 'CHRONIC',
    lpAddresses: {
      97: '',
      56: '0xdC2173F4472a9439753f0e80933cD0913e976808',
    },
    isTokenOnly: true,
    token: tokens.chronic,
    quoteToken: tokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', /* 0x2170Ed0880ac9A755fd29B2688956BD959F933F8 */
    },
    isTokenOnly: true,
    token: tokens.eth,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 14,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', /* 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.btcb,
  //   quoteToken: tokens.busd,
  // },
  {
    pid: 15,
    lpSymbol: 'ADA',
    lpAddresses: {
      97: '',
      56: '0x1E249DF2F58cBef7EAc2b0EE35964ED8311D5623', /* 0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47 */
    },
    isTokenOnly: true,
    token: tokens.ada,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 16,
  //   lpSymbol: 'DOGE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xE27859308ae2424506D1ac7BF5bcb92D6a73e211', /* 0xbA2aE424d960c26247Dd6c32edC70B295c744C43 */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.doge,
  //   quoteToken: tokens.busd,
  // },
  {
    pid: 17,
    lpSymbol: 'wBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
    },
    isTokenOnly: true,
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 18,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x804678fa97d91B974ec2af3c843270886528a9E6', /* 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82 */
  //   },
  //   isTokenOnly: true,
  //   token: tokens.cake,
  //   quoteToken: tokens.busd,
  // },
]

export default farms
